import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Sidebar from "../../components/adminSidebar/AdminSidebar"
import StudentForm from "../../components/studentForm/StudentForm"
import "./student.css"

function Student() {
    return (
        <div>
    <Header />
    <div className="admin-dashboard">
    <Sidebar />
    <StudentForm />
    </div>
    <Footer />
     </div>
    )
  }
  
  export default Student