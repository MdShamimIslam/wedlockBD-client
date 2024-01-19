import React from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import useAuth from "../../../hooks/useAuth";
import useBio from "../../../hooks/useBio";
import useBiodatas from "../../../hooks/useBiodatas";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const EditBio = () => {
  const { user } = useAuth();
  const { register, reset, handleSubmit, setValue } = useForm();
  const axiosSecure = useAxiosSecure();
  const [bio] = useBio();
  const [biodatas] = useBiodatas();

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    setValue("biodata_type", selectedValue);
  };
  const handleSelectChange2 = (event) => {
    const selectedValue = event.target.value;
    setValue("height", selectedValue);
  };
  const handleSelectChange3 = (event) => {
    const selectedValue = event.target.value;
    setValue("weight", selectedValue);
  };
  const handleSelectChange4 = (event) => {
    const selectedValue = event.target.value;
    setValue("permanent_division_name", selectedValue);
  };
  const handleSelectChange5 = (event) => {
    const selectedValue = event.target.value;
    setValue("present_division_name", selectedValue);
  };
  const handleSelectChange6 = (event) => {
    const selectedValue = event.target.value;
    setValue("race", selectedValue);
  };
  const handleSelectChange7 = (event) => {
    const selectedValue = event.target.value;
    setValue("expected_partner_height", selectedValue);
  };
  const handleSelectChange8 = (event) => {
    const selectedValue = event.target.value;
    setValue("expected_partner_weight", selectedValue);
  };
  const handleSelectChange9 = (event) => {
    const selectedValue = event.target.value;
    setValue("occupation", selectedValue);
  };

  const onSubmit = (data) => {
    const {
      age,
      biodata_type,
      contact_email,
      contact_number,
      date_of_birth,
      expected_partner_age,
      expected_partner_height,
      expected_partner_weight,
      fathers_name,
      height,
      mothers_name,
      name,
      occupation,
      permanent_division_name,
      present_division_name,
      profile_image,
      race,
      weight,
    } = data;

    const bioInfo = {
      age: parseInt(age),
      biodata_type,
      contact_number,
      date_of_birth,
      expected_partner_age: parseInt(expected_partner_age),
      expected_partner_height,
      expected_partner_weight: parseInt(expected_partner_weight),
      fathers_name,
      height,
      mothers_name,
      name,
      occupation,
      permanent_division_name,
      present_division_name,
      profile_image,
      race,
      weight: parseInt(weight),
    };
    console.log("update info--", bioInfo);
    axiosSecure.put(`/biodatas?email=${user?.email}`, bioInfo).then((res) => {
      if (res.data.modifiedCount > 0) {
        reset();
        toast.success("Your Profile Updated Successfully!!");
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Edit Biodata | WedlockBD</title>
      </Helmet>
      {bio.biodata_id ? (
        <div className="mb-20 mt-8 w-5/6 mx-auto">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* form -1 */}
            <div className="">
              <div className="flex gap-12">
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    required
                    {...register("name")}
                    className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
                    id="name"
                    placeholder="Enter your name"
                    type="text"
                  />
                </div>
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                    htmlFor="email"
                  >
                    Your Email
                  </label>
                  <input
                    required
                    defaultValue={user?.email}
                    readOnly
                    {...register("contact_email")}
                    className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                  />
                </div>
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                    htmlFor="number"
                  >
                    Mobile Number
                  </label>
                  <input
                    required
                    {...register("contact_number")}
                    className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
                    id="number"
                    placeholder="Enter your number"
                    type="number"
                  />
                </div>
              </div>
            </div>
            {/* form -2 */}
            <div className=" mt-3">
              <div className="flex gap-12">
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                    htmlFor="image"
                  >
                    Your image URL
                  </label>
                  <input
                    required
                    {...register("profile_image")}
                    className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
                    id="image"
                    placeholder="Enter your image"
                    type="text"
                  />
                </div>
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                    htmlFor="date"
                  >
                    Date of Birth
                  </label>
                  <input
                    required
                    {...register("date_of_birth")}
                    className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
                    id="date"
                    placeholder="Enter your date"
                    type="date"
                  />
                </div>
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                    htmlFor="gender"
                  >
                    Gender
                  </label>
                  <div className="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
                    <div className=" flex items-center">
                      <select
                        defaultValue={"default"}
                        required
                        {...register("biodata_type")}
                        id="gender"
                        name="gender"
                        onChange={handleSelectChange}
                        className="h-full rounded-md border-0 bg-transparent py-2 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      >
                        <option disabled value="default">
                          Pick one
                        </option>
                        <option>Male</option>
                        <option>Female</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* form -3 */}
            <div className="mt-3">
              <div className="flex gap-12">
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                    htmlFor="height"
                  >
                    Height
                  </label>
                  <div className="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
                    <div className=" flex items-center">
                      <select
                        defaultValue={"default"}
                        required
                        {...register("height")}
                        id="height"
                        name="height"
                        onChange={handleSelectChange2}
                        className="h-full py-2  rounded-md border-0 bg-transparent  pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      >
                        <option disabled value="default">
                          Pick one
                        </option>
                        <option>5'1"</option>
                        <option>5'2"</option>
                        <option>5'3"</option>
                        <option>5'4"</option>
                        <option>5'5"</option>
                        <option>5'6"</option>
                        <option>5'7"</option>
                        <option>5'8"</option>
                        <option>5'9"</option>
                        <option>5'10"</option>
                        <option>5'11"</option>
                        <option>6'1"</option>
                        <option>6'2"</option>
                        <option>6'3"</option>
                        <option>6'4"</option>
                        <option>6'5"</option>
                        <option>6'6"</option>
                        <option>6'7"</option>
                        <option>6'8"</option>
                        <option>6'9"</option>
                        <option>6'10"</option>
                        <option>6'11"</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                    htmlFor="weight"
                  >
                    Weight
                  </label>
                  <div className="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
                    <div className=" flex items-center">
                      <select
                        defaultValue={"default"}
                        required
                        {...register("weight")}
                        id="weight"
                        name="weight"
                        onChange={handleSelectChange3}
                        className="h-full py-2  rounded-md border-0 bg-transparent  pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      >
                        <option disabled value={"default"}>
                          Pick one
                        </option>
                        <option>40</option>
                        <option>41</option>
                        <option>42</option>
                        <option>43</option>
                        <option>44</option>
                        <option>45</option>
                        <option>46</option>
                        <option>47</option>
                        <option>48</option>
                        <option>49</option>
                        <option>50</option>
                        <option>51</option>
                        <option>52</option>
                        <option>53</option>
                        <option>54</option>
                        <option>55</option>
                        <option>56</option>
                        <option>57</option>
                        <option>58</option>
                        <option>59</option>
                        <option>60</option>
                        <option>61</option>
                        <option>62</option>
                        <option>63</option>
                        <option>64</option>
                        <option>65</option>
                        <option>66</option>
                        <option>67</option>
                        <option>68</option>
                        <option>69</option>
                        <option>70</option>
                        <option>71</option>
                        <option>72</option>
                        <option>73</option>
                        <option>74</option>
                        <option>75</option>
                        <option>76</option>
                        <option>77</option>
                        <option>78</option>
                        <option>79</option>
                        <option>80</option>
                        <option>81</option>
                        <option>82</option>
                        <option>83</option>
                        <option>84</option>
                        <option>85</option>
                        <option>86</option>
                        <option>87</option>
                        <option>88</option>
                        <option>89</option>
                        <option>90</option>
                        <option>91</option>
                        <option>92</option>
                        <option>93</option>
                        <option>94</option>
                        <option>95</option>
                        <option>96</option>
                        <option>97</option>
                        <option>98</option>
                        <option>99</option>
                        <option>100</option>
                        <option>101</option>
                        <option>102</option>
                        <option>103</option>
                        <option>104</option>
                        <option>105</option>
                        <option>106</option>
                        <option>107</option>
                        <option>108</option>
                        <option>109</option>
                        <option>110</option>
                        <option>111</option>
                        <option>112</option>
                        <option>113</option>
                        <option>114</option>
                        <option>115</option>
                        <option>116</option>
                        <option>117</option>
                        <option>118</option>
                        <option>119</option>
                        <option>120</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                    htmlFor="age"
                  >
                    Age
                  </label>
                  <input
                    required
                    {...register("age")}
                    className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
                    id="age"
                    placeholder="Enter your age"
                    type="number"
                  />
                </div>
              </div>
            </div>
            {/* form -4 */}
            <div className=" mt-3">
              <div className="flex gap-12">
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                    htmlFor="occupation"
                  >
                    Your Occupation
                  </label>
                  <div className="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
                    <div className=" flex items-center">
                      <select
                        defaultValue={"default"}
                        required
                        {...register("occupation")}
                        id="occupation"
                        name="occupation"
                        onChange={handleSelectChange9}
                        className="h-full py-2  rounded-md border-0 bg-transparent  pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      >
                        <option disabled value="default">
                          Pick one
                        </option>
                        {biodatas?.map((biodata) => (
                          <option key={biodata._id}>
                            {biodata?.occupation}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                    htmlFor="fathers-name"
                  >
                    Father's Name
                  </label>
                  <input
                    required
                    {...register("fathers_name")}
                    className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
                    id="fathers-name"
                    placeholder="Enter your father's name"
                    type="text"
                  />
                </div>
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                    htmlFor="mothers-name"
                  >
                    Mother's Name
                  </label>
                  <input
                    required
                    {...register("mothers_name")}
                    className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
                    id="mothers-name"
                    placeholder="Enter your mother's name"
                    type="text"
                  />
                </div>
              </div>
            </div>
            {/* form -5 */}
            <div className=" mt-3">
              <div className="flex gap-12">
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                    htmlFor="gender"
                  >
                    Permanent Division Name
                  </label>
                  <div className="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
                    <div className=" flex items-center">
                      <select
                        defaultValue={"default"}
                        required
                        {...register("permanent_division_name")}
                        id="gender"
                        name="gender"
                        onChange={handleSelectChange4}
                        className="h-full rounded-md border-0 bg-transparent py-2 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      >
                        <option disabled value={"default"}>
                          Pick one
                        </option>
                        <option>Dhaka</option>
                        <option>Barisal</option>
                        <option>Chittagong</option>
                        <option>Khulna</option>
                        <option>Mymensingh</option>
                        <option>Rajshahi</option>
                        <option>Rangpur</option>
                        <option>Sylhet</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                    htmlFor="gender"
                  >
                    Present Division Name
                  </label>
                  <div className="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
                    <div className=" flex items-center">
                      <select
                        defaultValue={"default"}
                        required
                        {...register("present_division_name")}
                        id="gender"
                        name="gender"
                        onChange={handleSelectChange5}
                        className="h-full rounded-md border-0 bg-transparent py-2 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      >
                        <option disabled value={"default"}>
                          Pick one
                        </option>
                        <option>Dhaka</option>
                        <option>Barisal</option>
                        <option>Chittagong</option>
                        <option>Khulna</option>
                        <option>Mymensingh</option>
                        <option>Rajshahi</option>
                        <option>Rangpur</option>
                        <option>Sylhet</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                    htmlFor="gender"
                  >
                    Your Race
                  </label>
                  <div className="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
                    <div className=" flex items-center">
                      <select
                        defaultValue={"default"}
                        required
                        {...register("race")}
                        id="race"
                        name="race"
                        onChange={handleSelectChange6}
                        className="h-full rounded-md border-0 bg-transparent py-2 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      >
                        <option disabled value={"default"}>
                          Pick one
                        </option>
                        <option>Bangladeshi</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* form -6 */}
            <div className=" mt-3">
              <div className="flex gap-12">
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                    htmlFor="number"
                  >
                    Partner Age
                  </label>
                  <input
                    required
                    {...register("expected_partner_age")}
                    className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
                    id="number"
                    placeholder="Enter your number"
                    type="number"
                  />
                </div>
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                    htmlFor="height"
                  >
                    Partner Height
                  </label>
                  <div className="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
                    <div className=" flex items-center">
                      <select
                        defaultValue={"default"}
                        required
                        {...register("expected_partner_height")}
                        id="height"
                        name="height"
                        onChange={handleSelectChange7}
                        className="h-full py-2  rounded-md border-0 bg-transparent  pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      >
                        <option disabled value={"default"}>
                          Pick one
                        </option>
                        <option>5'1"</option>
                        <option>5'2"</option>
                        <option>5'3"</option>
                        <option>5'4"</option>
                        <option>5'5"</option>
                        <option>5'6"</option>
                        <option>5'7"</option>
                        <option>5'8"</option>
                        <option>5'9"</option>
                        <option>5'10"</option>
                        <option>5'11"</option>
                        <option>6'1"</option>
                        <option>6'2"</option>
                        <option>6'3"</option>
                        <option>6'4"</option>
                        <option>6'5"</option>
                        <option>6'6"</option>
                        <option>6'7"</option>
                        <option>6'8"</option>
                        <option>6'9"</option>
                        <option>6'10"</option>
                        <option>6'11"</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="w-full">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
                    htmlFor="weight"
                  >
                    Partner Weight
                  </label>
                  <div className="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
                    <div className=" flex items-center">
                      <select
                        defaultValue="default"
                        required
                        {...register("expected_partner_weight")}
                        id="weight"
                        onChange={handleSelectChange8}
                        name="weight"
                        className="h-full py-2  rounded-md border-0 bg-transparent  pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                      >
                        <option disabled value="default">
                          Choose one
                        </option>
                        <option>40</option>
                        <option>41</option>
                        <option>42</option>
                        <option>43</option>
                        <option>44</option>
                        <option>45</option>
                        <option>46</option>
                        <option>47</option>
                        <option>48</option>
                        <option>49</option>
                        <option>50</option>
                        <option>51</option>
                        <option>52</option>
                        <option>53</option>
                        <option>54</option>
                        <option>55</option>
                        <option>56</option>
                        <option>57</option>
                        <option>58</option>
                        <option>59</option>
                        <option>60</option>
                        <option>61</option>
                        <option>62</option>
                        <option>63</option>
                        <option>64</option>
                        <option>65</option>
                        <option>66</option>
                        <option>67</option>
                        <option>68</option>
                        <option>69</option>
                        <option>70</option>
                        <option>71</option>
                        <option>72</option>
                        <option>73</option>
                        <option>74</option>
                        <option>75</option>
                        <option>76</option>
                        <option>77</option>
                        <option>78</option>
                        <option>79</option>
                        <option>80</option>
                        <option>81</option>
                        <option>82</option>
                        <option>83</option>
                        <option>84</option>
                        <option>85</option>
                        <option>86</option>
                        <option>87</option>
                        <option>88</option>
                        <option>89</option>
                        <option>90</option>
                        <option>91</option>
                        <option>92</option>
                        <option>93</option>
                        <option>94</option>
                        <option>95</option>
                        <option>96</option>
                        <option>97</option>
                        <option>98</option>
                        <option>99</option>
                        <option>100</option>
                        <option>101</option>
                        <option>102</option>
                        <option>103</option>
                        <option>104</option>
                        <option>105</option>
                        <option>106</option>
                        <option>107</option>
                        <option>108</option>
                        <option>109</option>
                        <option>110</option>
                        <option>111</option>
                        <option>112</option>
                        <option>113</option>
                        <option>114</option>
                        <option>115</option>
                        <option>116</option>
                        <option>117</option>
                        <option>118</option>
                        <option>119</option>
                        <option>120</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center mt-8">
              <input
                className="bg-gray-900 cursor-pointer text-white px-6 py-2 w-1/2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900"
                type="submit"
                value="Save And Publish Now"
              />
            </div>
          </form>
        </div>
      ) : (
        <div className="flex justify-center items-center my-44 text-center">
          <div className="w-2/3">
            <h2 className="text-3xl font-bold mb-3 text-purple-500">
              ----Keep In Mind----
            </h2>
            <p>
              If you want to edit your biodata then first you must create your
              own profile then you can edit your biodata.So,click the button below to create a profile 
            </p>
            <Link to="/add-biodata">
              <div className="flex justify-center">
                <button className="py-2 w-60 h-16 rounded-lg px-6 mb-4 mt-6 bg-sky-700 hover:bg-sky-600 duration-300 text-white flex items-center justify-center overflow-hidden hover:overflow-visible relative group">
                  <svg
                    viewBox="0 0 1024 1024"
                    className="icon rotate-45 group-hover:duration-700 absolute w-12 -translate-x-full translate-y-full scale-0 group-hover:scale-100 group-hover:translate-x-8 group-hover:-translate-y-8 duration-150"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        d="M244.5 662l268.1-446.4 268 446.4z"
                        fill="#9ED5E4"
                      ></path>
                      <path
                        d="M780.6 676.2H244.5c-5.3 0-10.2-2.7-12.8-7.1s-2.6-9.8 0-14.3l268.1-446.3c2.6-4.4 7.5-7.1 12.8-7.1 5.3 0 10.2 2.7 12.8 7.1l268.1 446.3c2.6 4.4 2.6 9.8 0 14.3-2.7 4.4-7.6 7.1-12.9 7.1z m-510.5-28.5H755L512.6 244.2 270.1 647.7z"
                        fill="#154B8B"
                      ></path>
                      <path
                        d="M512.6 23s129 131.7 129 352.4-129 376-129 376-129-155.3-129-376S512.6 23 512.6 23z"
                        fill="#F7F9F9"
                      ></path>
                      <path
                        d="M512.6 765.7c-4.5 0-8.8-2-11.6-5.4-1.4-1.6-33.7-40.9-66.4-108.1-30.1-61.9-65.9-160.2-65.9-276.8 0-116.9 36-208.8 66.1-265.4 32.8-61.6 65.5-95.3 66.9-96.7 2.8-2.9 6.7-4.5 10.8-4.5 4.1 0 8 1.6 10.8 4.5 1.4 1.4 34.1 35.1 66.9 96.7 30.2 56.6 66.1 148.6 66.1 265.4 0 116.6-35.8 214.9-65.9 276.8-32.6 67.2-65 106.5-66.4 108.1-2.7 3.4-6.9 5.4-11.4 5.4z m0-720.5c-11.9 14.5-32 41.3-51.8 78.8-28.4 53.6-62.4 140.8-62.4 251.5 0 111.4 34.3 205.4 63.1 264.7 19.6 40.3 39.1 70.2 51.1 86.9 12-16.9 31.9-47.2 51.5-87.8 28.6-59.1 62.7-152.9 62.7-263.9 0-110.7-33.9-197.8-62.4-251.5-19.9-37.4-40-64.3-51.8-78.7z"
                        fill="#154B8B"
                      ></path>
                      <path
                        d="M447.6 278.9a65 62.4 0 1 0 130 0 65 62.4 0 1 0-130 0Z"
                        fill="#9ED5E4"
                      ></path>
                      <path
                        d="M512.6 355.6c-44 0-79.8-34.4-79.8-76.7s35.8-76.7 79.8-76.7 79.8 34.4 79.8 76.7-35.9 76.7-79.8 76.7z m0-124.8c-27.6 0-50.1 21.6-50.1 48.2s22.5 48.2 50.1 48.2 50.1-21.6 50.1-48.2-22.5-48.2-50.1-48.2z"
                        fill="#154B8B"
                      ></path>
                      <path
                        d="M570 860.9c0 13 1.5-7.5-57.4 141.4-56.2-142.1-57.4-128.4-57.4-141.4 0-36 25.7-65.2 57.4-65.2s57.4 29.2 57.4 65.2z"
                        fill="#9ED5E4"
                      ></path>
                      <path
                        d="M512.5 1016.6c-6.2 0-11.7-3.7-13.9-9.2-31.2-78.9-45.6-110.1-51.8-123.3-5.4-11.6-6.6-14.3-6.6-23.1 0-43.8 32.4-79.5 72.2-79.5 39.8 0 72.2 35.7 72.2 79.5v0.9c0 7.7-1 9.9-5.3 19.1-5.8 12.4-19.5 41.6-53.1 126.5-2 5.4-7.5 9.1-13.7 9.1z m0-206.7c-23.5 0-42.6 22.9-42.6 51 0 2.7 0 2.7 4.1 11.5 5.7 12.3 16.5 35.7 38.5 90.1 24-59.5 34.8-82.6 39.9-93.4 1.2-2.5 2.3-4.9 2.7-5.9v-2.3c0-28.1-19.1-51-42.6-51z"
                        fill="#154B8B"
                      ></path>
                    </g>
                  </svg>
                  <span className="duration-500">Now Add Your Profile </span>
                </button>
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditBio;
