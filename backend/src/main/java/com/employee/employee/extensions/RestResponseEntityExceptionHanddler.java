package com.employee.employee.extensions;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.employee.employee.entities.errorModel.ErrorDetail;
import com.employee.employee.entities.exceptions.NotFoundException;

@ControllerAdvice
public class RestResponseEntityExceptionHanddler extends ResponseEntityExceptionHandler {

    @ExceptionHandler(NotFoundException.class)
    public ResponseEntity<?> handleNotFoundException(NotFoundException ex, WebRequest request) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ErrorDetail.builder()
                .statusCode(404)
                .message(ex.getMessage())
                .path(request.getDescription(false))
                .build());
    }
}
