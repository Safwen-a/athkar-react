import React from "react";
import { Button } from "@mui/material";

const Content = (props) => (

      <tr className={props.finish}><td>
        <Button variant="contained" color="success" onClick={props.action}>{props.rp}</Button>
      </td><td>
          <h4><b>{props.type === "coran-m" ? `أَعُوذُ بِاللهِ مِنْ الشَّيْطَانِ الرَّجِيمِ` : null}</b></h4>
          <h4><b>{props.type === "coran" ? "بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم" : null}</b></h4>
          {props.thekr}
        </td></tr> 
)

export default Content;
