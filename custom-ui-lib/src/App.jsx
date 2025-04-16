import React from 'react';
import Card from "../src/styles/features/components/Card";
import Form from './styles/features/components/Form';
import Test from "./styles/features/components/Test";
import Navbar from './styles/features/components/Navbar';
import Table from './styles/features/components/Table';
import MainSection from './styles/features/components/MainSection';
import Footer from './styles/features/components/Footer';

function App() {
  const cardComponentString = `
const CardComponent = ({ title, description, imgUrl }) => (
  <div className="card-container border-2 border-black rounded-lg overflow-hidden shadow-md w-[664px] h-[530px]">
    <div className="card-header p-3">
      <h2 className="txt-xl fw-semibold">{title}</h2>
    </div>
    <div className="card-body p-3">
      <img src={imgUrl} alt={title} className="w-full h-[240px] object-cover rounded-md mb-3" />
      <p className="txt-md txt-secondary">{description}</p>
    </div>
  </div>
);
`;
const formComponentString = `
import React from 'react';

const FormComponent = () => {
  return (
    <div className="form-container">
      <form className="form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">Full Name</label>
          <input type="text" id="name" className="input-field" placeholder="Enter your full name" />
        </div>
        
        <div className="form-group">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" id="email" className="input-field" placeholder="Enter your email" />
        </div>
        
        <div className="form-group">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" id="password" className="input-field" placeholder="Enter your password" />
        </div>

        <div className="form-group">
          <button type="submit" className="submit-btn">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
`;



  return (
    <div>
      <Navbar />

      <section className="components-section pd-x-4 pd-y-2">
        <h2 className="txt-xl fw-semibold txt-primary">Components</h2>

        <MainSection formImgUrl={"../src/card-img.png"} text={cardComponentString} />
        
      <Footer></Footer>
      </section>
    </div>
  );
}

export default App;
