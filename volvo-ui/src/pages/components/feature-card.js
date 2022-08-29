import React, { useEffect, useState } from "react";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import { IconButton, Typography } from "@mui/material";
import "./features.css";
import { useGlobal } from "../../context/global-states.provider";
import BorderColorOutlinedIcon from "@mui/icons-material/BorderColorOutlined";
import LongMenu from "./long-menu";
import { useApi } from "../../context/api-provider";
const FeatureCard = ({ title, details, children, handelOpen, arr }) => {
  const { selectedFeature } = useGlobal();
  const [features, setFeatures] = useState();
  const activeClass = "shadow active-boder";
  const { getMonroneyFeature } = useApi();
  const active = (defaultValue, value) => {
    if (selectedFeature.toLowerCase() === title) {
      return value;
    }
    return defaultValue;
  };
  const { selectFeature } = useGlobal();
  const handelClick = () => {
    handelOpen();
    selectFeature(title);
    console.log(title);
    title === "pricing" && getMonroneyFeature(title);
  };

  useEffect(() => {
    console.log(arr);
  }, [arr]);

  return (
    <div className={`feature-card p-1 ${active("", activeClass)}`}>
      <div className="feature-card__header  d-flex">
        <Typography className="one"
          textTransform={"uppercase"}
          fontWeight={"bold"}
          variant="p"
          fontSize={".8rem"}
        >
          <div className="inside-header">
           {title}
          </div>
          
        </Typography>
        <div className="header-icon ms-auto">
          {
            <LongMenu openModel={handelClick} className="header-iconp" /> /* {active(
              // <IconButton>
              <AssistantPhotoIcon onClick={handelClick} />,
              // </IconButton>,
              <BorderColorOutlinedIcon color="primary" />
            )} */
          }
        </div>
      </div>
      <div className="feature-card__body">
        <Typography variant="" fontWeight={"600"} fontSize={"0.6rem"}>
          <div className="inside-body">
           {details || children}
          </div>
          
        </Typography>
      </div>
    </div>
  );
};

export default FeatureCard;
