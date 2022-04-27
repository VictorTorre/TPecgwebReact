const styles = {
  TextLogo: {
    fontSize: "54px",
    fontWeight: "900",
    color:"white"
  },
  nav:{
      backgroundColor:"#43ACD4"
  }
};
const Header = () => {
  return (
    <div className="header-content p-0" style={styles.nav}>
      <nav className="navbar navbar-expand" style={{ padding: "20px" }}>
        <div className="collapse navbar-collapse justify-content-between">
          <div className="col-3">
            <div className="ml-3 row d-flex">
              <div style={styles.TextLogo}>Médicos</div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
