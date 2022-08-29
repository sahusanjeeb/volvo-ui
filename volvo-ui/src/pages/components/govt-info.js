import { Typography } from "@mui/material";
import React from "react";
import LocalGasStationIcon from "@mui/icons-material/LocalGasStation";
import "./govtinfo.css";
export const GovtInfo = () => {
  return (
    <div className="govt-info">
      <div className="govt-info__fuel-economy">
        <div className="header__title d-flex">
          <Typography variant="p">Fuel Economy And Environment</Typography>
          <div className="header__vechicle-type d-flex align-items-center ms-auto bg-light text-dark">
            <LocalGasStationIcon />
            <Typography className="ms-3" fontSize={".7rem"}>
              Gasolane vechicle
            </Typography>
          </div>
        </div>
        <div className="fuel-ecnomy-section  mt-2 bg-light text-dark d-flex">
          <div className="economy-info position-relative ">
            <Typography marginLeft={"6%"} fontSize={".6rem"} variant="p">
              Fuel Economy
            </Typography>
            <div className="mpg d-flex">
              <div className="mpg-val">
                <LocalGasStationIcon className="fuel-icon" />
                <Typography variant="p" margin={0} fontSize={"3.8rem"}>
                  26
                </Typography>
              </div>

              <div className="units ms-2">
                <p>MPG</p>
                <div className="seperate d-flex">
                  <div className="city">
                    <p>23</p>
                    <p className="font-sm">City</p>
                  </div>
                  <div className="high-way ms-2">
                    <p>30</p>
                    <p className="font-sm">Highway</p>
                  </div>
                </div>
              </div>
              <Typography
                className="combined"
                marginLeft={"6.5%"}
                fontSize={".6rem"}
                variant="p"
              >
                combined city/hwy
              </Typography>
            </div>
            <div className="gallons ms-3">
              <strong>3.8</strong>
              <span className="fs-sm"> gallons per 100 miles</span>
            </div>
          </div>
          <div className="mpg-text mt-4">
            <p className="fs-sm">
              small SUV 2WD range from <br />
              16 to 125 MPG. The best <br /> vechicle rates 142 MPGe
            </p>
          </div>
          <div className="spend ms-auto">
            <span className="line-h-lg">
              you <span className="fs-md-lg">Spend</span> <br />
              <span className="fs-lg">$2,000</span>
            </span>

            <br />
            <span className="fs-md line-h-sm">
              more in fuel cost over 5 years
            </span>
            <br />
            <span className="line-h-sm fs-sm">
              Compared to the average new vehicle
            </span>
          </div>
        </div>

        <div className="annual-cost-section d-flex mt-2 gap-2">
          <div className="annual-cost__display bg-light text-dark p-2 br-3s line-h-lg">
            <p className="fs-md">
              Annual Fuel <span className="fs-md-lg">Cost</span>
            </p>
            <p className="fs-lg">$1,700</p>
          </div>
          <div className="anual-cost__rating bg-light text-dark  br-3s ">
            <div className="ratings d-flex gap-2">
              <div className="green-house-rating ">
                <p className="fs-sm">
                  <strong>Fuel economy and green house gas rating</strong>
                </p>
              </div>
              <div className="smog-rating ">
                <p className="fs-sm">
                  <strong>smog rating</strong>
                </p>
              </div>
            </div>
            <span className="fs-md">
              Lorem ipsum dolor sit amet cddfdfdfdfdf
            </span>
          </div>
        </div>
        <div className="logos-qr-section d-flex mt-2">
          <div className="content">
            <p className="fs-sm margin-0">
              Actual results will vary for many reasons, including driving
              conditions and how you drive and maintain your vehicle. The
              average new vehicle gets 27 MPG and costs $ 6,500 to fuel over 5
              years. Cost estimates are based on 15000 miles per year at $2.95
              per gallon. MPGe is miles per gasoline gallon equivalent. Vehicle
              emissions are a significant cause of climate change and smog
            </p>
            <div className="logos d-flex">
              <div className="logo-content ">
                <p className="fs-md-lg margin-0">fueleconomy.gov</p>
                <p className="fs-sm margin-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing
                </p>
              </div>
              <div className="logo-images d-flex gap-1 ms-3 p-2">
                <div className="gov-logo"></div>
                <div className="gov-logo"></div>
                <div className="gov-logo"></div>
              </div>
            </div>
          </div>
          <div className="qr-code border d-flex align-items-center justify-content-center">
            <span className="qr">QR</span>
          </div>
        </div>
      </div>
      <div className="lower-content">
        <div className="left-container ">
          <h5>PARTS CONTENT INFORMATION</h5>
          <div className="inner-left-container">
            <ul>
              <li>FOR VEHICLES IN THIS CARLINE: VOLVO SERIES</li>
              <li>U.S./CANADIAN PARTS CONTENT: 1%</li>
              <li>MAJOR SOURCES OF FOREIGN PARTS CONTENT: SWEDEN: 40%</li>
              <li>
                FOR THIS VEHICLE: FINAL ASSEMBLY POINT: GOTHENBURG, SWEDEN
              </li>
              <li>COUNTRY OF ORIGIN: ENGINE PARTS: SWEDEN</li>
              <li>TRANSMISSION PARTS:JAPAN</li>
            </ul>
            <p>
              Note: Parts contents does not include final assembly,
              distribution, or other non-parts costs.
            </p>
          </div>
        </div>

        <div className="right-container">
          <div className="first-inner-container">
            <h5>GOVERNMENT 5-STAR SAFETY RATINGS</h5>
            <div className="first-right-content">
              <p>
                This vehicle has not been rated by the government for overall
                vehicle score, frontal crash or rollover risk.
              </p>
            </div>
            <p className="last-para">
              Star ratings range from 1 to 5 stars ( ) with 5 being the highest.
              Source: National Highway Traffic Safety Administration (NHTSA)
              www.safercar.gov or 1-888-327-4236
            </p>
          </div>
          <div className="second-inner-container">
            <div className="left-second-content">
              <p>VEHICLE IDENTIFICATION</p>
              <p>Type & Chassis: 246 952643</p>
              <p>Model Year: 2022</p>
              <p>Color: Silver Dawn</p>
              <p>VIN: YV4L12DK0N1952643</p>
            </div>
            <div className="left-second-content">
              <p>Port of Importation: Brunswick, GA</p>
              <p>Delivered by: Truck</p>
              <p>DELIVERY ADDRESS</p>
              <p>VOLVO CARS ATHENS 7149</p>
              <p>2890 ATLANTA HIGHWAY</p>
              <p>ATHENS, GA 30606</p>
            </div>
          </div>
          <div className="third-inner-container">
            {/* <div>
              <img src="barCode.png" />
            </div> */}
            <div>
              <p>YV4L12DK0N1952643</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
