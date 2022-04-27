import SignIn from "../components/Login/SignIn";
import logo from "../assets/logos/logo4.png";


const Login = () => {
  return (
    <div className="authincation d-flex flex-column flex-lg-row flex-column-fluid">
      <div className="container flex-row-fluid d-flex flex-column justify-content-center position-relative overflow-hidden p-7 mx-auto">
        <div className="d-flex justify-content-center h-100 align-items-center">
          <div className="authincation-content style-2">
            <div className="row no-gutters">
              <div className="col">
                <div className="text-center mt-3 mb-4 brand-logo">
                  <img className="ml-2" src={logo} alt="logo" width="50%" />
                </div>
              </div>
              {/* <Ingresar loading={loading} /> */}
              <SignIn/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
