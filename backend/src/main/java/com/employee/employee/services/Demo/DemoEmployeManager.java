package com.employee.employee.services.Demo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.context.annotation.Primary;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import com.employee.employee.entities.Employee;
import com.employee.employee.services.Contracts.EmployeeService;

@Primary
@Service
@Repository("demo")
public class DemoEmployeManager implements EmployeeService {

    @Override
    public List<Employee> getAllEmployees() {
        var list = new ArrayList<Employee>();
        list.add(new Employee(1, "ahmet", "can", 1000));
        list.add(new Employee(1, "dağ", "tepe", 1000));
        list.add(new Employee(1, "hasan", "olur", 1000));
        return list;
    }

    @Override
    public Employee getOneEmployeeById(int id) {
        return new Employee(1, "dağ", "tepe", 1000);
    }

    @Override
    public Employee createOneEmployee(Employee employee) {
        return new Employee(1, "ahmet", "can", 1000);
    }

    @Override
    public Employee updateOneEmployee(int id, Employee employee) {
        return null;
    }

    @Override
    public void deleteOneEmployee(int id) {

    }

}
