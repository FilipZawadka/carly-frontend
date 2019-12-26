import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { employeesLoaded,fetchEmployees } from '../redux/actions'

const EmployeeLine = ({ employee }) => <div>{employee.name} ({employee.age} yrs old): {employee.company}</div>

class PageEmployeesList extends React.Component {

  constructor(props) {
    super(props);

    this.state = { 
      isLoading: false    
    }
  }

  componentWillMount() {
    this.props.fetchEmployees();
    /*
    if(!this.props.loaded){
    this.setState({ isLoading: true });
    fetch('http://localhost:3004/employees')
    .then((data) => data.json())
    // Without Redux
    // .then((employees) => this.setState({ employees, isLoading: false }));
    // With Redux
    .then((employees) => {
      this.props.employeesLoaded(employees);
      this.setState({ isLoading: false });
    });
  }*/
  }

  render() {
    const { isLoading } = this.state;
    const { employees,fullname} = this.props;

    if(isLoading) {
      return <p>Loading ...</p>
    }
    
    return (
      <div>
        
        <h1>Employees List:</h1>
        <h2 align="right">{fullname}</h2>
        <div>{employees && employees.map((employee => <EmployeeLine key={employee.id} employee={employee} />))}</div>
        <Link to="/new">
          <button>Create employee</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    employees: state.employees,
    newemployee: state.newemployee,
    loaded: state.loaded,
    loading:state.loading,
    error:state.error,
    fullname:state.fullname
  }
}
const mapDispatchToProps = (dispatch) => ({
 // employeesLoaded: employees => dispatch(employeesLoaded(employees)),
  fetchEmployees: () => dispatch(fetchEmployees())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PageEmployeesList)