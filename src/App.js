
import './App.css';
import styled from 'styled-components';


import { GlobalStyles } from './globalStyles';
import TaskList from './components/TaskList';

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  margin-top:150px;
`
const Footer= styled.p`
  position:fixed;
  bottom:5px;
  right:5px;
`


function App() {
 
  return (
    <>    
     <Container>

       <TaskList/>
       <GlobalStyles/>
       <Footer>Created By DK.</Footer>
     </Container>
    </>
  );
}

export default App;
