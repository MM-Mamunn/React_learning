import Header from '../components/nav'
import Footer from '../components/footer'
import busImage from './image/bus2.png';
export default function Home(){
    return(
        <>
        <Header/>
        <body class="bg-gradient-to-br from-blue-400 to-green-300 min-h-screen flex flex-col items-center justify-center " 
      style={{ backgroundImage: "url('https://images.pexels.com/photos/386009/pexels-photo-386009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')", minHeight:"110vh" }}> 
    <h1 class="text-3xl font-bold text-center mb-8 text-black-700 animate-bounce"> 
        <u class="no-underline inline-block animation fadeInOut">Bus Management System</u> 
    </h1> 
    <p class="text-xl mb-12 text-center">Complete Solution for Maintaining Your Buses</p> 
 
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl"> 
 
        <a href="/trips_home" class="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300"> 
            <h2 class="text-2xl font-semibold mb-4">Track the Buses</h2> 
            <p>Track your buses by the Trip dashboard.That shows everything about trips.</p> 
        </a> 
 
        <a href="/coming_soon" class="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300"> 
            <h2 class="text-2xl font-semibold mb-4">Maintenance Scheduling</h2> 
            <p>Schedule and manage maintenance activities efficiently.</p> 
        </a> 
 
        <a href="/drivers_home" class="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300"> 
            <h2 class="text-2xl font-semibold mb-4">Driver Management</h2> 
            <p>Keep track of driver assignments and performance metrics.</p> 
        </a> 
 
        <a href="/bus_home" class="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300"> 
            <h2 class="text-2xl font-semibold mb-4">Bus Monitoring</h2> 
            <p>Monitor Bus, add new Bused and update or delete bus.</p> 
        </a> 
 
        <a href="/coming_soon" class="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300"> 
            <h2 class="text-2xl font-semibold mb-4">Route </h2> 
            <p>Watch and maintain Route</p> 
        </a> 
 
        <a href="/coming_soon" class="bg-white rounded-lg shadow-md p-6 transform hover:scale-105 transition-transform duration-300"> 
            <h2 class="text-2xl font-semibold mb-4">Comprehensive Reports</h2> 
            <p>Generate detailed reports for insights and decision making.</p> 
        </a> 
    </div> 
<footer style ={{position: "sticky" , top:"100vh", width:"100vw"}}>
      <Footer/>
      </footer>
</body>


      
        </>
    )
}


