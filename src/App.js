import { Route, Routes } from 'react-router-dom';
import {AllProductsPanel, AddProductPanel, EditProductPanel} from 'components/panels'

import {DashBoardPage, PageNotFound, LoginPage} from './pages'
function App() {
 
  return (
      <>
        <Routes>
         <Route index element={<LoginPage/>}/>
         <Route path="dashboard" element={<DashBoardPage/>}>
            <Route index element={<AllProductsPanel/>}/>
            <Route path="add" element={<AddProductPanel/>}/>
            <Route path="edit" element={<EditProductPanel/>}/>
         </Route>
         <Route path="*" element={<PageNotFound/>}/>
        </Routes>
      </>
  );
}

export default App;

 
 