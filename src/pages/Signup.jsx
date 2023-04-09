import {
  AutoComplete,
  Button,
  Cascader,
  Checkbox,
  Form,
  Input,
  InputNumber,
  Select,
  DatePicker,
  Radio,
  TimePicker,
  Space,
  Col,
  Divider,
  Row,
  Card,
} from "antd";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import {
  Moonsign,
  GenderValues,
  MaritalStatus,
  NumberOfChildren,
  LivingWithChidrenStatus,
  ReligionValues,
  SubReligionValuesHindu,
  SubReligionValuesBuddha,
  SubReligionValuesJain,
  other,
  profileCreatedBy,
  horosMatch,
  Height,
  Weight,
  BloodGroup,
  Complexion,
  PhysicalStatus,
  PhysicalStatusDetails,
  BodyType,
  DietType,
  YesOrNo,
  Income,
  Countries,
  CountryState,
  IndianCountrySatate,
  Education,
  Employer,
  YesOrNoAbroad,
  MothersOccupation,
  FathersOccupation,
  SistersOrBrothers,
  FamilyStatus,
  FamilyValues
  //   agri,
  //   aryavysya,
  //   banjara,
  //   barai,
  //   bari,
  //   beldar,
  //   bhandari,
  //   bhavsarkshatriya,
  //   bhil,
  //   bhoi,
  //   brahmin,
  //   ckp,
  //   castenobar,
  //   chambhar,
  //   dhangar,
  //   dhobi,
  //   dhor,
  //   gabit,
  //   gawali,
  //   ghisadi,
  //   golla,
  //   gondhali,
  //   gosavi,
  //   gowari,
  //   gowda,
  //   gurav,
  //   gurjar,
  //   gond,
  //   jangam,
  //   kasar,
  //   koli,
  //   koshti,
  //   kshtriya,
  //   kumbhar,
  //   kunbi,
  //   levapatil,
  //   lingayat,
  //   lohar,
  //   lonari,
  //   mahar,
  //   mali,
  //   maratha,
  //   marwari,
  //   matang,
  //   nathjogi,
  //   nhavi,
  //   otari,
  //   rajput,
  //   ramoshi,
  //   sali,
  //   sarode,
  //   savji,
  //   shahu,
  //   shimpi,
  //   sonar,
  //   sutar,
  //   teli,
  //   thakur,
  //   vadar,
  //   vaishnav,
  //   vaishyawani,
  //   vanjari,
  //   wani,
  //   yadav,
} from "../constants";

dayjs.extend(customParseFormat);

const { Option } = Select;
const dateFormat = "YYYY-MM-DD";

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};
const Signup = () => {
  const [form] = Form.useForm();
  const [shouldVisible, setshouldVisible] = useState(false);
  const [isPhysicallyChallenged, setIsPhysicallyChallenged] = useState(false);
  const [showOtherSubCasteValues, setShowOtherSubCasteValues] = useState(false);
  const [showOtherCountryValues, setShowOtherCountryValues] = useState(false);
  const [showOtherStateValues, setShowOtherStateValues] = useState(false);
  const [showOtherEducationalues, setShowOtherEducationalues] = useState(false);
  const [showMarriedSister, setShowMarriedSister] = useState(false);
  const [showMarriedBrother, setShowMarriedBrother] = useState(false);
  const [showMarriedBrotherOrSister, setShowMarriedBrotherOrSister] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [SubReligionValues, setSubReligionValues] = useState([]);
  const [SubCasteValues, setSubCasteValues] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="91">+91</Option>
        {/* <Option value="87">+87</Option> */}
      </Select>
    </Form.Item>
  );
  const handleChangeMarital = (e) => {
    if (e.target.value != "Unmarried") {
      setshouldVisible(true);
    } else {
      setshouldVisible(false);
    }
  };

  const countries = () => {
    let arr = [];
    for (let i = 0; i < CountryState.countries.length; i++) {
      const element = CountryState.countries[i];
      arr.push(element.country);
    }
    setCountryList(arr);
  };
  //   const countries = CountryState.countries.map(val => {

  //     setCountryList(val.country)

  //   })

  useEffect(() => {
    countries();
    // return () => {
    //   second
    // }
  }, []);

  const handleChangeReligionValues = (value) => {
    form.resetFields(["caste", "subcast"]);
    if (value == "Hindu") {
      setSubReligionValues(SubReligionValuesHindu);
    }
    if (value == "Buddhist") {
      setSubReligionValues(SubReligionValuesBuddha);
    }
    if (value == "Jain") {
      setSubReligionValues(SubReligionValuesJain);
    }
  };
  const handleChangeCasteValues = (value) => {
    form.resetFields(["subcast"]);

    let val = value.toLowerCase();
    if (val == "other") {
      setShowOtherSubCasteValues(true);
      // setDefaultSubCast("Other")
      // setSubCasteValues(other)
      form.setFieldsValue({ subcast: value });
    } else {
      setShowOtherSubCasteValues(false);

      var regexPattern = /\s+/g;
      var ans = val.replace(regexPattern, "");
      console.log("ans", ans);
      //     console.log("ggg", subCaste)
      //    const subcaste =  subCaste.filter(value => value == val)
      //     console.log("ggg", subcaste)
      // let arrVal =
      // console.log("arrVal", arrVal)
      import(`../constants`).then((module) => {
        // Do something with the imported module
        console.log("module", module[ans]);
        setSubCasteValues(module[ans]);
      });
    }
  };
  const handleChangeSubCasteValues = (value) => {
    if (value == "Other") {
      setShowOtherSubCasteValues(true);
    } else {
      setShowOtherSubCasteValues(false);
    }
  };

  const handleChangePhysicalStatus = (e) => {
    if (e.target.value == "Physically challenged") {
      setIsPhysicallyChallenged(true);
    } else {
      setIsPhysicallyChallenged(false);
    }
  };

  const handleChangeSateValues = (value) => {
    if (value == "Other") {
      setShowOtherStateValues(true);
    } else {
      setShowOtherStateValues(false);
      const country = form.getFieldValue("countries");
      if (country == "India") {
        const state = form.getFieldValue("state");
        const listOfcities = IndianCountrySatate[state];
        let arr = [];
        listOfcities?.map((val) => {
          arr.push(val);
        });

        setCityList(arr);
      } else {
        setShowOtherStateValues(true);
      }
    }
  };
  const handleChangeCountriesValues = (value) => {
    if (value == "Other") {
      setShowOtherCountryValues(true);
    } else {
      setShowOtherCountryValues(false);
      let arr = [];
      for (let i = 0; i < CountryState.countries.length; i++) {
        const element = CountryState.countries[i];
        if (element.country == value) {
          element.states.map((val) => {
            arr.push(val);
          });
        }
      }
      setStateList(arr);
    }
  };

  const handleChangeEducationValues = (value) => {
    if (value == "Other") {
        setShowOtherEducationalues(true);
      } else {
        setShowOtherEducationalues(false);
      }
  };

  
  const handleBrother = (value) => {

    if(value == "None"){
        setShowMarriedBrother(false)
    }else{
        setShowMarriedBrother(true)
        const sister = form.getFieldValue("brother");
        if(value == "3+"){
        setShowMarriedBrotherOrSister(["None", "1", "2", "3", "3+"])
        }
        else if(value == "1"){
            setShowMarriedBrotherOrSister(["None","1"])
        }
        else if(value == "2"){
            setShowMarriedBrotherOrSister(["None", "1", "2"])
            }
            else if(value == "3"){
                setShowMarriedBrotherOrSister(["None", "1", "2", "3"])
                }
    }
  }
  const handleSister = (value) => {

    if(value == "None"){
        setShowMarriedSister(false)
    }else{
        setShowMarriedSister(true)
        const sister = form.getFieldValue("sister");
        if(value == "3+"){
        setShowMarriedBrotherOrSister(["None", "1", "2", "3", "3+"])
        }
        else if(value == "1"){
            setShowMarriedBrotherOrSister(["None","1"])
        }
        else if(value == "2"){
            setShowMarriedBrotherOrSister(["None", "1", "2"])
            }
            else if(value == "3"){
                setShowMarriedBrotherOrSister(["None", "1", "2", "3"])
                }
    }
  }
  const handleSearchCountryValues = (value) => {};

  const handleSearchCityValues = (value) => {};
  const handleSearchStateValues = (value) => {};
  return (
    <>
      <Form
        {...formItemLayout}
        form={form}
        // style={{
        //     display: 'flex',

        //   }}
        name="register"
        onFinish={onFinish}
        initialValues={{
          //   residence: ["zhejiang", "hangzhou", "xihu"],
          prefix: "91",
        }}
        style={{
          display: "flex",
          width: "100%",
        }}
        scrollToFirstError
      >
        <Space
          direction="vertical"
          size="middle"
          style={{
            display: "flex",
            width: "100%",
          }}
        >
          {/* <Row>
    <Col xs={24} sm={24} md={8} lg={6} xl={4}>Column 1</Col>
    <Col xs={24} sm={12} md={8} lg={6} xl={4}>Column 2</Col>
    <Col xs={24} sm={12} md={8} lg={6} xl={4}>Column 3</Col>
    <Col xs={24} sm={12} md={8} lg={6} xl={4}>Column 4</Col>
  </Row> */}
          <Row justify="center">
            <Col>
              <Card
                title="Basic Details"
                size="large"
                style={{ maxWidth: "900px" }}
              >
                <Form.Item
                  name="createdBy"
                  label="Profile Created By"
                  rules={[
                    {
                      required: true,
                      message: "Please select value!",
                    },
                  ]}
                >
                  <Select showSearch placeholder="Please select">
                    {profileCreatedBy &&
                      profileCreatedBy.map((val, index) => {
                        return (
                          <Option key={index} value={val}>
                            {val}
                          </Option>
                        );
                      })}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="fisrtname"
                  label="Fisrt Name"
                  //   tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: "Please input your first name",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name="lastname"
                  label="Last Name"
                  //   tooltip="What do you want others to call you?"
                  rules={[
                    {
                      required: true,
                      message: "Please input your last name",
                      whitespace: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  name="gender"
                  label="Gender"
                  rules={[
                    {
                      required: true,
                      message: "Please select gender!",
                    },
                  ]}
                >
                  <Select showSearch placeholder="select your gender">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                  </Select>
                </Form.Item>

                <Form.Item
                  name="dateofbirth"
                  label="Date Of birth"
                  rules={[
                    {
                      required: true,
                      message: "Date Of birth is required",
                    },
                    {
                      message: "Minimum age should be of 18 years",
                      validator: (_, value) => {
                        const today = dayjs();
                        const years = today.diff(value, "year");

                        if (years > 18) {
                          return Promise.resolve();
                        } else {
                          return Promise.reject(
                            "Minimum age should be of 18 years"
                          );
                        }
                      },
                    },
                  ]}
                >
                  <DatePicker />
                </Form.Item>
                <Form.Item
                  name="height"
                  label="Height"
                  rules={[
                    {
                      required: true,
                      message: "Please select value!",
                    },
                  ]}
                >
                  <Select showSearch placeholder="Please select">
                    {Height &&
                      Height.map((val, index) => {
                        return (
                          <Option key={index} value={val}>
                            {val}
                          </Option>
                        );
                      })}
                  </Select>
                </Form.Item>

                <Form.Item
                  name="income"
                  label="Income"
                  rules={[
                    {
                      required: true,
                      message: "Please select value!",
                    },
                  ]}
                >
                  <Select showSearch placeholder="Please select">
                    {Income &&
                      Income.map((val, index) => {
                        return (
                          <Option key={index} value={val}>
                            {val}
                          </Option>
                        );
                      })}
                  </Select>
                </Form.Item>
                <Form.Item
                  name="maritalstatus"
                  label="Marital Status"
                  rules={[
                    {
                      required: true,
                      message: "Marital status is required",
                    },
                  ]}
                >
                  <Radio.Group>
                    {MaritalStatus.map((val, index) => (
                      <Radio onChange={handleChangeMarital} value={val}>
                        {val}
                      </Radio>
                    ))}
                  </Radio.Group>
                </Form.Item>

                {shouldVisible && (
                  <Form.Item
                    name="childrenlivingstatus"
                    label="Children Living Status"
                    rules={[
                      {
                        required: true,
                        message: "This field is required",
                      },
                    ]}
                  >
                    <Radio.Group>
                      {LivingWithChidrenStatus.map((val, index) => (
                        <Radio value={val}>{val}</Radio>
                      ))}
                    </Radio.Group>
                  </Form.Item>
                )}
                {shouldVisible && (
                  <Form.Item
                    name="noofchildren"
                    label="No. Of Children"
                    rules={[
                      {
                        required: true,
                        message: "Please select No. Of Children!",
                      },
                    ]}
                  >
                    <Select showSearch placeholder="Please Select">
                      {NumberOfChildren &&
                        NumberOfChildren.map((val, index) => {
                          return (
                            <Option key={index} value={val}>
                              {val}
                            </Option>
                          );
                        })}
                    </Select>
                  </Form.Item>
                )}

                <Form.Item
                  name="religion"
                  label="Religion"
                  rules={[
                    {
                      required: true,
                      message: "Please select religion!",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    onChange={handleChangeReligionValues}
                    placeholder="Please Select"
                  >
                    {ReligionValues &&
                      ReligionValues.map((val, index) => {
                        return (
                          <Option key={index} value={val}>
                            {val}
                          </Option>
                        );
                      })}
                  </Select>
                </Form.Item>

                {SubReligionValues && (
                  <Form.Item
                    name="caste"
                    label="Caste"
                    rules={[
                      {
                        required: true,
                        message: "Please select caste!",
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      onChange={handleChangeCasteValues}
                      placeholder="Please Select"
                    >
                      {SubReligionValues &&
                        SubReligionValues.map((val, index) => {
                          return (
                            <Option key={index} value={val}>
                              {val}
                            </Option>
                          );
                        })}
                    </Select>
                  </Form.Item>
                )}

                {SubCasteValues && (
                  <Form.Item
                    name="subcast"
                    label="Sub Caste"
                    rules={[
                      {
                        required: true,
                        message: "Please select caste!",
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      onChange={handleChangeSubCasteValues}
                      placeholder="Please Select"
                    >
                      {SubCasteValues &&
                        SubCasteValues.map((val, index) => {
                          return (
                            <Option key={index} value={val}>
                              {val}
                            </Option>
                          );
                        })}
                    </Select>
                  </Form.Item>
                )}
                {showOtherSubCasteValues && (
                  <Form.Item
                    name="custocaste"
                    label="Caste/Sub Caste"
                    //   tooltip="What do you want others to call you?"
                    rules={[
                      {
                        required: true,
                        message: "Please input your caste",
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                )}

                <Form.Item
                  name="countries"
                  label="Countries"
                  rules={[
                    {
                      required: true,
                      message: "Please select religion!",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    onChange={handleChangeCountriesValues}
                    placeholder="Please Select"
                  >
                    {countryList &&
                      countryList.map((val, index) => {
                        return (
                          <Option key={index} value={val}>
                            {val}
                          </Option>
                        );
                      })}
                  </Select>
                </Form.Item>

                {showOtherCountryValues && (
                  <Form.Item
                    name="customCountry"
                    label="Country You Live In"
                    //   tooltip="What do you want others to call you?"
                    rules={[
                      {
                        required: true,
                        message: "Please input your Country",
                        whitespace: true,
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                )}

                {stateList && (
                  <Form.Item
                    name="state"
                    label="State You Live In"
                    rules={[
                      {
                        required: true,
                        message: "Please select state value",
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      onChange={handleChangeSateValues}
                      placeholder="Please Select"
                    >
                      {stateList &&
                        stateList.map((val, index) => {
                          return (
                            <Option key={index} value={val}>
                              {val}
                            </Option>
                          );
                        })}
                    </Select>
                  </Form.Item>
                )}

                {cityList && (
                  <Form.Item
                    name="city"
                    label="City You Live In"
                    rules={[
                      {
                        required: true,
                        message: "Please select city value",
                      },
                    ]}
                  >
                    <Select
                      showSearch
                      // onChange={handleChangeSateValues}
                      placeholder="Please Select"
                    >
                      {cityList &&
                        cityList.map((val, index) => {
                          return (
                            <Option key={index} value={val}>
                              {val}
                            </Option>
                          );
                        })}
                    </Select>
                  </Form.Item>
                )}


                  <Form.Item
                    name="village"
                    label="Village You Live In(if applicable)"
                    //   tooltip="What do you want others to call you?"
                    rules={[
                    //   {
                    //     required: true,
                    //     message: "Please input your Country",
                    //     whitespace: true,
                    //   },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                
                  <Form.Item
                    name="hometown"
                    label="Hometown"
                    //   tooltip="What do you want others to call you?"
                    rules={[
                    //   {
                    //     required: true,
                    //     message: "Please input your Country",
                    //     whitespace: true,
                    //   },
                    ]}
                  >
                    <Input />
                  </Form.Item>
              </Card>
            </Col>
          </Row>

          <Row justify="center">
            <Col>
              <Card
                title="Contact Details"
                size="small"
                style={{ maxWidth: "700px" }}
              >
                          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="confirm"
            label="Confirm Password"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone Number"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>

          <Form.Item
            name="alternatephone"
            label="Alternate Phone Number"
            rules={
              [
                //   {
                //     required: true,
                //     message: "Please input your phone number!",
                //   },
              ]
            }
          >
            <Input
              addonBefore={prefixSelector}
              style={{
                width: "100%",
              }}
            />
          </Form.Item>
                 </Card>
              </Col>
            </Row>

            <Row justify="center">
            <Col>
              <Card
                title="Education & Career"
                size="small"
                style={{ maxWidth: "700px" }}
              >

<Form.Item
            name="education"
            label="Highest Education"
            rules={
              [
                  {
                    required: true,
                    message: "Please select !",
                  },
              ]
            }
          >
            <Select onChange={handleChangeEducationValues} placeholder="Please select">
              {Education &&
                Education.map((val, index) => {
                  return (
                    <Option key={index} value={val}>
                      {val}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>

        {
            showOtherEducationalues && <Form.Item 
            name="customEducation"
            label="Highest Education"
            //   tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your education details",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        }  
 <Form.Item 
            name="schoolName"
            label="School Name"
            //   tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your school name",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item 
            name="collegeName"
            label="UG College"
            //   tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your College name",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        
          <Form.Item
            name="employedIn"
            label="Employed In"
            rules={
              [
                  {
                    required: true,
                    message: "Please select !",
                  },
              ]
            }
          >
            <Select onChange={handleChangeEducationValues} placeholder="Please select">
              {Employer &&
                Employer.map((val, index) => {
                  return (
                    <Option key={index} value={val}>
                      {val}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>

          <Form.Item 
            name="organizationName"
            label="Organization Name"
            //   tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input !"
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="isAbroad"
            label="Interested in settling abroad?"
            rules={
              [
                  {
                    required: true,
                    message: "Please select !",
                  },
              ]
            }
          >
            <Select placeholder="Please select">
              {YesOrNoAbroad &&
                YesOrNoAbroad.map((val, index) => {
                  return (
                    <Option key={index} value={val}>
                      {val}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>

        
                 </Card>
              </Col>
            </Row>

            <Row justify="center">
            <Col>
              <Card
                title="Family Details"
                size="small"
                style={{ maxWidth: "700px" }}
              >

<Form.Item 
            name="mothersOccupation"
            label="Mother's Occupation"
            //   tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input !",
                whitespace: true,
              },
            ]}
          >
             <Select placeholder="Please select">
              {MothersOccupation &&
                MothersOccupation.map((val, index) => {
                  return (
                    <Option key={index} value={val}>
                      {val}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>

          <Form.Item 
            name="fathersOccupation"
            label="Father's Occupation"
            //   tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input !",
                whitespace: true,
              },
            ]}
          >
             <Select placeholder="Please select">
              {FathersOccupation &&
                FathersOccupation.map((val, index) => {
                  return (
                    <Option key={index} value={val}>
                      {val}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>

          <Form.Item 
            name="sister"
            label="Sister"
            //   tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input !",
                whitespace: true,
              },
            ]}
          >
          <Select onChange={handleSister} placeholder="Please select">
              {SistersOrBrothers &&
                SistersOrBrothers.map((val, index) => {
                  return (
                    <Option key={index} value={val}>
                      {val}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>

          {showMarriedSister &&  <Form.Item 
            name="marriedsister"
            label="Married Sister"
            //   tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input !",
                whitespace: true,
              },
            ]}
          >
          <Select placeholder="Please select">
              {showMarriedBrotherOrSister &&
                showMarriedBrotherOrSister.map((val, index) => {
                  return (
                    <Option key={index} value={val}>
                      {val}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>}

          <Form.Item 
            name="brother"
            label="Brother"
            //   tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input !",
                whitespace: true,
              },
            ]}
          >
                   <Select onChange={handleBrother} placeholder="Please select">
              {SistersOrBrothers &&
                SistersOrBrothers.map((val, index) => {
                  return (
                    <Option key={index} value={val}>
                      {val}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>
          {showMarriedBrother &&  <Form.Item 
            name="marriedBrother"
            label="Married Brother"
            //   tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input !",
                whitespace: true,
              },
            ]}
          >
          <Select placeholder="Please select">
              {showMarriedBrotherOrSister &&
                showMarriedBrotherOrSister.map((val, index) => {
                  return (
                    <Option key={index} value={val}>
                      {val}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>}
          <Form.Item 
            name="familyStatus"
            label="Family Status"
            //   tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input !",
                whitespace: true,
              },
            ]}
          >
            <Select placeholder="Please select">
              {FamilyStatus &&
                FamilyStatus.map((val, index) => {
                  return (
                    <Option key={index} value={val}>
                      {val}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>
          <Form.Item 
            name="familyIncome"
            label="Family Income"
            //   tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input !",
                whitespace: true,
              },
            ]}
          >
           <Select placeholder="Please select">
              {Income &&
                Income.map((val, index) => {
                  return (
                    <Option key={index} value={val}>
                      {val}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>

          <Form.Item 
            name="familyType"
            label="Family Type"
            //   tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input !",
                whitespace: true,
              },
            ]}
          >
             <Select placeholder="Please select">
              {FamilyValues &&
                FamilyValues.map((val, index) => {
                  return (
                    <Option key={index} value={val}>
                      {val}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>
          <Form.Item 
            name="familyBasedOutOf"
            label="Family based out of"
            //   tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input !",
                whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item 
            name="livingWithParents"
            label="Living with parents?"
            //   tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input !",
                whitespace: true,
              },
            ]}
          >
             <Select placeholder="Please select">
              {horosMatch &&
                horosMatch.map((val, index) => {
                  return (
                    <Option key={index} value={val}>
                      {val}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>
          <Form.Item
            name="gothra"
            label="Gothra"
            //   tooltip="What do you want others to call you?"
            rules={
              [
                //   {
                //     required: true,
                //     message: "Please input your first name",
                //     whitespace: true,
                //   },
              ]
            }
          >
            <Input />
          </Form.Item>


                 </Card>
              </Col>
            </Row>

            <Row justify="center">
            <Col>
              <Card
                title="Religious Attributes"
                size="small"
                style={{ maxWidth: "700px" }}
              >
                  <Form.Item
            name="moonsign"
            label="Moonsign"
            rules={
              [
                //   {
                //     required: true,
                //     message: "Please select value!",
                //   },
              ]
            }
          >
            <Select placeholder="Please select">
              {Moonsign &&
                Moonsign.map((val, index) => {
                  return (
                    <Option key={index} value={val}>
                      {val}
                    </Option>
                  );
                })}
            </Select>
          </Form.Item>

          <Form.Item
            name="horosMatch"
            label="Horos Match"
            rules={
              [
                //   {
                //     required: true,
                //     message: "Marital status is required",
                //   },
              ]
            }
          >
            <Radio.Group>
              {horosMatch?.map((val, index) => (
                <Radio value={val}>{val}</Radio>
              ))}
            </Radio.Group>
          </Form.Item>
          <Form.Item
            name="manglik"
            label="Manglik"
            rules={
              [
                //   {
                //     required: true,
                //     message: "Marital status is required",
                //   },
              ]
            }
          >
            <Radio.Group>
              {horosMatch?.map((val, index) => (
                <Radio value={val}>{val}</Radio>
              ))}
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="placeOfBirth"
            label="Place of Birth"
            //   tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your place of birth",
                // whitespace: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="timeOfBirth"
            label="Time of Birth"
            //   tooltip="What do you want others to call you?"
            rules={[
              {
                required: true,
                message: "Please input your time of birth",
                // whitespace: true,
              },
            ]}
          >
            <Space direction="vertical">
              <TimePicker
                defaultValue={dayjs("12:08", "HH:mm")}
                format="HH:mm"
              />
            </Space>
          </Form.Item>
                 </Card>
              </Col>
            </Row>

          
            <Row justify="center">
            <Col>
              <Card
                title="Physical Attributes"
                size="small"
                style={{ maxWidth: "700px" }}
              >  <Form.Item
              name="weight"
              label="Weight"
              rules={[
                {
                  required: true,
                  message: "Please select value!",
                },
              ]}
            >
              <Select placeholder="Please select">
                {Weight &&
                  Weight.map((val, index) => {
                    return (
                      <Option key={index} value={val}>
                        {val}
                      </Option>
                    );
                  })}
              </Select>
            </Form.Item>
  
            <Form.Item
              name="bloodGroup"
              label="Blood Group"
              rules={[
                {
                  required: true,
                  message: "Please select value!",
                },
              ]}
            >
              <Select placeholder="Please select">
                {BloodGroup &&
                  BloodGroup.map((val, index) => {
                    return (
                      <Option key={index} value={val}>
                        {val}
                      </Option>
                    );
                  })}
              </Select>
            </Form.Item>
  
            <Form.Item
              name="Complexion"
              label="Complexion"
              rules={[
                {
                  required: true,
                  message: "Please select value!",
                },
              ]}
            >
              <Select placeholder="Please select">
                {Complexion &&
                  Complexion.map((val, index) => {
                    return (
                      <Option key={index} value={val}>
                        {val}
                      </Option>
                    );
                  })}
              </Select>
            </Form.Item>
  
            <Form.Item
              name="physicalStatus"
              label="Physical Status"
              rules={[
                {
                  required: true,
                  message: "Physical status is required",
                },
              ]}
            >
              <Radio.Group>
                {PhysicalStatus?.map((val, index) => (
                  <Radio onChange={handleChangePhysicalStatus} value={val}>
                    {val}
                  </Radio>
                ))}
              </Radio.Group>
            </Form.Item>
  
            {isPhysicallyChallenged && (
              <Form.Item
                name="physicalStatusDetails"
                label="Select Type"
                rules={[
                  {
                    required: true,
                    message: "Please select value!",
                  },
                ]}
              >
                <Select placeholder="Please select">
                  {PhysicalStatusDetails &&
                    PhysicalStatusDetails?.map((val, index) => {
                      return (
                        <Option key={index} value={val}>
                          {val}
                        </Option>
                      );
                    })}
                </Select>
              </Form.Item>
            )}
  
            <Form.Item
              name="bodyType"
              label="Body Type"
              rules={
                [
                  //   {
                  //     required: true,
                  //     message: "Marital status is required",
                  //   },
                ]
              }
            >
              <Radio.Group>
                {BodyType.map((val, index) => (
                  <Radio value={val}>{val}</Radio>
                ))}
              </Radio.Group>
            </Form.Item>
  
            <Form.Item
              name="diet"
              label="Diet"
              rules={
                [
                  //   {
                  //     required: true,
                  //     message: "Please select value!",
                  //   },
                ]
              }
            >
              <Select placeholder="Please select">
                {DietType &&
                  DietType.map((val, index) => {
                    return (
                      <Option key={index} value={val}>
                        {val}
                      </Option>
                    );
                  })}
              </Select>
            </Form.Item>
            <Form.Item
              name="smoke"
              label="Smoke"
              rules={[
                {
                  required: true,
                  message: "Please select a value",
                },
              ]}
            >
              <Radio.Group>
                {YesOrNo.map((val, index) => (
                  <Radio value={val}>{val}</Radio>
                ))}
              </Radio.Group>
            </Form.Item>
  
            <Form.Item
              name="drink"
              label="Drink"
              rules={[
                {
                  required: true,
                  message: "Please select a value",
                },
              ]}
            >
              <Radio.Group>
                {YesOrNo.map((val, index) => (
                  <Radio value={val}>{val}</Radio>
                ))}
              </Radio.Group>
            </Form.Item>
                 </Card>
              </Col>
            </Row>
          <Form.Item
            name="agreement"
            valuePropName="checked"
            rules={[
              {
                validator: (_, value) =>
                  value
                    ? Promise.resolve()
                    : Promise.reject(new Error("Should accept agreement")),
              },
            ]}
            {...tailFormItemLayout}
          >
            <Checkbox>
              I have read the <a href="/jj">agreement</a>
            </Checkbox>
          </Form.Item>
          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Register
            </Button>
          </Form.Item>
        </Space>
      </Form>
    </>
  );
};
export default Signup;
