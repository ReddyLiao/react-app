import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/button";

const Input = styled.input`
  padding: 0.8em 5em 0em 0em;
  margin-bottom: 0.8em;
  border-bottom: 1px solid #a6a6a6;
  border-top: none;
  border-left: none;
  border-right: none;
  display: block;
`;

const Login = () => {
  return (
    <div>
      <div className="container-fluid bg-standard">
        <div className="row align-items-center">
          <div className="col h-25 col-sm-4">
            <div className="text-white p-5">
              <h5>Find 3D Objects, Mockups and Illustrations here.</h5>
            </div>
          </div>
          <div className="col col-sm-8 bg-white rounded-start rounded-3">
            <div className="mx-auto mt-3 mt-sm-0 px-sm-6 py-sm-5 px-3">
              <div className="d-flex flex-column">
                <h1 className="align-self-center mb-4">Create Account</h1>
                <div className="row g-3 justify-content-center">
                  <div class="col-sm-5">
                    <Button className="text-dark bg-white w-100 py-1 px-sm-4 py-sm-2">
                      <img
                        src="/images/google_Logo.png"
                        className="float-start"
                        alt=""
                        width={24}
                      />
                      Sign up with Google
                    </Button>
                  </div>
                  <div class="col-sm-5 ">
                    <Button className="text-dark bg-white w-100 py-1 px-sm-4 py-sm-2">
                      <img
                        src="/images/fb_Logo.png"
                        className="float-start"
                        alt=""
                        width={24}
                      />
                      Sign up with FB
                    </Button>
                  </div>
                </div>
                <div class="input-group justify-content-center my-sm-3 my-2">
                  <h3 className="text-black-50">- OR -</h3>
                </div>
                <div class="input-group justify-content-center mb-sm-2 mb-1 py-1 mb-sm-0 py-sm-3 py-lg-4">
                  <div className="d-flex flex-column text-start">
                    <Input type="text" className="" placeholder="Full name" />
                    <Input
                      type="text"
                      className=""
                      placeholder="Email address"
                    />
                    <Input type="text" className="" placeholder="password" />
                  </div>
                </div>
                <Button className="bg-standard text-white w-50 mx-auto py-3 mt-sm-4 mt-0">
                  Create Account
                </Button>
                <p className="mx-auto text-black-50">
                  Already have an account?
                  <Link className="mx-2" to="/login">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
