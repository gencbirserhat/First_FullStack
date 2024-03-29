package com.employee.employee.services;

import java.util.List;

import javax.management.RuntimeErrorException;

import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.employee.employee.entities.Employee;
import com.employee.employee.entities.exceptions.EmployeeNotFoundException;
import com.employee.employee.repositories.EmployeeRepository;
import com.employee.employee.services.Contracts.EmployeeService;

@Service
@Repository("mysql")
public class EmployeeManager implements EmployeeService {

    private final EmployeeRepository employeeRepository;

    public EmployeeManager(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

    @Override
    public Employee getOneEmployeeById(int id) {
        return employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFoundException(id));
    }

    @Override
    public Employee createOneEmployee(Employee employee) {
        return employeeRepository.save(employee);
    }

    @Override
    public Employee updateOneEmployee(int id, Employee employee) {
        if (employee.getId() != id) {
            throw new RuntimeErrorException(null, "please check the employee id");
        }
        var entity = getOneEmployeeById(id);

        entity.setFirstName(employee.getFirstName());
        entity.setLastName(employee.getLastName());
        entity.setSalary(employee.getSalary());

        return employeeRepository.save(entity);
    }

    @Override
    public void deleteOneEmployee(int id) {
        employeeRepository.deleteById(id);
    }

}
