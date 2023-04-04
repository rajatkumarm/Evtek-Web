import React from 'react'
import Styles from './Filter.module.scss';
import Button from '../Button/Button';
import Icon from '../Icon';
import Select from '../Select/Select';
import SelectItem from '../SelectItem/SelectItem';
import Text from '../Text/Text'
import { useState } from 'react';
import DatePick from '../DatePick';
import DateRange from '../DateRange';
export default function Filter() {
  const [show, setShow] = useState(false)


  return (

    <div className={Styles.filter}>
      <div className={Styles.filterHead}>
        <div className={Styles.btn} onClick={() => setShow(!show)}>

          <Button className={Styles.btn} variant="borderTertiary" size="" >
            <Icon type="Group" customClass={Styles.btnicon} />
            Filter
          </ Button >
        </div>
        <div className={Styles.Dropdown}>
          <Text variant={""}>sort by:</Text>

          <Select className={Styles.sortDrop}>
            <SelectItem>date</SelectItem>
            <SelectItem>date</SelectItem>
            <SelectItem>date</SelectItem>
            <SelectItem>date</SelectItem>
          </Select>

        </div>
      </div>


      {show && (
        <div className={Styles.filterBox}>

          <div className={Styles.DateRange}>

            <div className={Styles.labels}>
              <Text variant={"msm"}>Date or Range</Text>
            </div>

            <div className={Styles.Date}>
              <div className={Styles.date}>
                <DatePick placeholder={"__/__/____"}/>
              </div>
              <div class={Styles.bgBorder}></div>
              <div className={Styles.Range} >
              
                  <div className={Styles.rangeShow} >
                    {/* <Text variant={""} >(optional)</Text>
                    <div className={Styles.rangeText} > <Text variant={""}>tap to select range</Text></div> */}
                     <DateRange placeholder={"(optional)taptoselectrange "} dateFormat="d/MM/yy"/>
                  </div>
                
              </div>


            </div>

          </div>

          <div className={Styles.boxDropdown}>
            <div className={Styles.Dropdown}>
              <div className={Styles.labels}>
                <Text variant={"msm"}> Materials Types </Text>
              </div>
              <Select className={Styles.dropDown}>
                <SelectItem>Show All Materials</SelectItem>
                <SelectItem>Show All Materials</SelectItem>
                <SelectItem>Show All Materials</SelectItem>
                <SelectItem>Show All Materials</SelectItem>
              </Select>

            </div>
            <div className={Styles.Dropdown}>
              <div className={Styles.labels}>
                <Text variant={"msm"}> Payment Type </Text>
              </div>
              <Select className={Styles.dropDown}>
                <SelectItem>Show Donation only</SelectItem>
                <SelectItem>Show All Materials</SelectItem>
                <SelectItem>Show All Materials</SelectItem>
                <SelectItem>Show All Materials</SelectItem>
              </Select>

            </div>
          </div>

          <div className={Styles.Dropdown}>
            <div className={Styles.labels}>
              <Text variant={"msm"}> Service Type </Text>

            </div>
            <Select className={Styles.dropDown}>
              <SelectItem>show all services</SelectItem>
              <SelectItem>show all services</SelectItem>
              <SelectItem>show all services</SelectItem>
              <SelectItem>show all services</SelectItem>
            </Select>

          </div>
          <div className={Styles.btnSave}>
            <Button btnHandler={() => setShow(!show)}>Save</Button>
          </div>

        </div>
      )}

    </div>

  )
}
