import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Sidebar from "../../components/adminSidebar/AdminSidebar"
import TeacherForm from "../../components/teacherForm/TeacherForm"

function Teacher() {
    return (
        <div>
    <Header />
    <div className="admin-dashboard">
    <Sidebar />
    <TeacherForm />
    </div>
    <Footer />
     </div>
    )
  }
  
  export default Teacher