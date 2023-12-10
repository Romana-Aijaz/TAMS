import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import AdminForm from "../../components/adminForm/AdminForm"
import Sidebar from "../../components/adminSidebar/AdminSidebar"
import "./admin.css"

function Admin() {
    return (
        <div>
    <Header />
    <div className="admin-dashboard">
    <Sidebar />
    <AdminForm />
    </div>
    <Footer />
     </div>
    )
  }
  
  export default Admin
  