import './App.css';
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Button, Form, Table, Confirm } from 'semantic-ui-react';

const App = () => {
  let keyIndex = 1;

  const [empId, setEmpId] = useState(0);
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [office, setOffice] = useState('');
  const [salary, setSalary] = useState(0);

  const [emploeeList, setEmployeeList] = useState([]);
  const [edit, setEdit] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    getEmployees();
    // return () => {
    //   cleanup
    // }
  }, []);

  const addEmployee = () => {
    Axios.post('/create', {
      name, 
      position, 
      office, 
      salary
    }).then(() => {
      console.log('Success');
      getEmployees();
      updateCancel(); // use this to reset the fields
    });
  };

  const getEmployees = () => {
    Axios.get('/getEmployees').then((response) => {
      console.log(response);
      setEmployeeList(response.data);
    });
  };

  const editEmployee = (val) => {   
    setEmpId(val.id);
    setName(val.name);
    setPosition(val.position);
    setOffice(val.office);
    setSalary(val.salary);
    setEdit(true);
  };

  const updateEmployee = () => {
    Axios.put('/update', {
      id: empId,
      name, 
      position, 
      office, 
      salary
    }).then((response) => {
      console.log(response);
      if (response.data.affectedRows === 1) {
        setEmployeeList(emploeeList.map((data) => {
          return data.id === empId ? {id: empId, name, position, office, salary} : data;
        }));
        updateCancel();
      }
    });
  };

  const updateCancel = () => {
    setEdit(false);
    setEmpId(0);
    setName('');
    setPosition('');
    setOffice('');
    setSalary(0);
  };

  const deleteEmployee = (id) => {
    Axios.delete(`/delete/${id}`).then((response) => {
      console.log(response);
      if (response.data.affectedRows === 1) {
        setEmployeeList(emploeeList.filter((data) => {
          return data.id !== id;
        }));
      }
    });
  };

  // const header = [
  //   { title: 'Name', prop: 'name'},
  //   { title: 'Position', prop: 'position'},
  //   { title: 'Office', prop: 'office'},
  //   { title: 'Salary', prop: 'salary'}
  // ];

  // const row = (x, i, header) =>
  //   <Table.Row key={`tr-${i}`}>
  //     {header.map((y, k) => 
  //       <Table.Cell key={`tc-${k}`}>
  //         {x[y.prop]}
  //       </Table.Cell>
  //     )}
  //   </Table.Row>

  // const renderTableData = () =>
    // <Table celled fixed singleLine>
    //   <Table.Header>
    //     <Table.Row>
    //       {header.map((x, i) =>
    //         <Table.HeaderCell key={`thc-${i}`} textAlign='center'>
    //           {x.title}
    //         </Table.HeaderCell>
    //       )}
    //     </Table.Row>
    //   </Table.Header>
    //   <Table.Body>
    //     {emploeeList.map((x, i) => row(x, i, header))}
    //   </Table.Body>
    // </Table>

  const openConfirm = (id) => {
    setOpen(true);
    setEmpId(id);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const handleConfirm = () => {
    deleteEmployee(empId);
    setOpen(false);
  };
  
  const renderAddUpdateButton = () => {
    if(edit) {
      return (
        <React.Fragment>
          <Button style={{backgroundColor: '#229954', color: 'white'}} onClick={updateEmployee}>Update Employee</Button>
          <Button onClick={updateCancel}>Cancel</Button>
        </React.Fragment>
      );
    }
    return (<Button primary onClick={addEmployee}>Add Employee</Button>);
  };

  return (
    <div className="app">
      <div className="header">
        <h1>Simple Employee Management Page</h1>
      </div>
      <Confirm open={open} header='Confirm Delete' onCancel={handleCancel} onConfirm={handleConfirm} />
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='Name' value={name} onChange={(e) => { setName(e.target.value) }}/>
        </Form.Field>
        <Form.Field>
          <label>Position</label>
          <input placeholder='Position' value={position} onChange={(e) => { setPosition(e.target.value) }}/>
        </Form.Field>
        <Form.Field>
          <label>Office</label>
          <input placeholder='Office' value={office} onChange={(e) => { setOffice(e.target.value) }}/>
        </Form.Field>
        <Form.Field>
          <label>Salary</label>
          <input placeholder='0' value={salary} onChange={(e) => { setSalary(e.target.value) }}/>
        </Form.Field>
        {renderAddUpdateButton()}
      </Form>
      <hr />
      <Table celled fixed singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell textAlign='center'>Name</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Position</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Office</Table.HeaderCell>
            <Table.HeaderCell textAlign='center'>Salary</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {emploeeList.map((val) => {
            return (
              <Table.Row key={keyIndex++}>
                <Table.Cell>{val.name}</Table.Cell>
                <Table.Cell>{val.position}</Table.Cell>
                <Table.Cell>{val.office}</Table.Cell>
                <Table.Cell textAlign='right'>{val.salary}</Table.Cell>
                <Table.Cell textAlign='center'>
                  <Button primary onClick={() => editEmployee(val)}>Edit</Button>
                  <Button color='red' onClick={() => openConfirm(val.id)}>Delete</Button>
                </Table.Cell>
              </Table.Row>
            )
          })}
        </Table.Body>
        </Table>
        {/*{renderTableData()}*/}
    </div>
  );
}

export default App;
