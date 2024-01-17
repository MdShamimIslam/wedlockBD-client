import React from "react";
import { Helmet } from "react-helmet-async";

const AddBiodata = () => {
  return (
    <div className="mb-20 mt-8">
      <Helmet>
        <title>Add Biodata | WedlockBD</title>
      </Helmet>
      {/* form -1 */}
      <div className="space-y-5">
        <div className="flex gap-12">
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
              htmlFor="name"
            >
              Your Name
            </label>
            <input
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
              className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
              id="number"
              placeholder="Enter your number"
              type="number"
            />
          </div>
        </div>
      </div>
      {/* form -2 */}
      <div className="space-y-5">
        <div className="flex gap-12">
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
              htmlFor="image"
            >
              Your image URL
            </label>
            <input
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
            <div class="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
              <div class=" flex items-center">
                <select
                  id="gender"
                  name="gender"
                  class="h-full rounded-md border-0 bg-transparent py-2 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option disabled selected>Pick one</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* form -3 */}
      <div className="space-y-5">
        <div className="flex gap-12">
        <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
              htmlFor="height"
            >
              Height
            </label>
            <div class="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
              <div class=" flex items-center">
                <select
                  id="height"
                  name="height"
                  class="h-full py-2  rounded-md border-0 bg-transparent  pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option disabled selected>Pick one</option>
                  <option>5</option>
                  <option>5'1\"</option>
                  <option>5'2\"</option>
                  <option>5'3\"</option>
                  <option>5'4\"</option>
                  <option>5'5\"</option>
                  <option>5'6\"</option>
                  <option>5'7\"</option>
                  <option>5'8\"</option>
                  <option>5'9\"</option>
                  <option>5'10\"</option>
                  <option>5'11"</option>
                  <option>6</option>
                  <option>6'1\"</option>
                  <option>6'2\"</option>
                  <option>6'3\"</option>
                  <option>6'4\"</option>
                  <option>6'5\"</option>
                  <option>6'6\"</option>
                  <option>6'7\"</option>
                  <option>6'8\"</option>
                  <option>6'9\"</option>
                  <option>6'10\"</option>
                  <option>6'11\"</option>
                  <option>7</option>
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
            <div class="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
              <div class=" flex items-center">
                <select
                  id="weight"
                  name="weight"
                  class="h-full py-2  rounded-md border-0 bg-transparent  pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option disabled selected>Pick one</option>
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
              className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
              id="age"
              placeholder="Enter your age"
              type="number"
            />
          </div>
          
        </div>
      </div>
      {/* form -4 */}
      <div className="space-y-5">
        <div className="flex gap-12">
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
              htmlFor="occupation"
            >
              Your Occupation
            </label>
            <input
              className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
              id="occupation"
              placeholder="Enter your occupation"
              type="text"
              required
            />
          </div>
          <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
              htmlFor="fathers-name"
            >
              Father's Name
            </label>
            <input
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
              className="flex h-10 w-full px-3 py-2 text-sm  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-gray-100  border border-gray-300  rounded-md"
              id="mothers-name"
              placeholder="Enter your mother's name"
              type="text"
            />
          </div>
          
        </div>
      </div>
      {/* form -5 */}
      <div className="space-y-5">
        <div className="flex gap-12">
        <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
              htmlFor="gender"
            >
              Permanent Division Name
            </label>
            <div class="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
              <div class=" flex items-center">
                <select
                  id="gender"
                  name="gender"
                  class="h-full rounded-md border-0 bg-transparent py-2 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option disabled selected>Pick one</option>
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
            <div class="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
              <div class=" flex items-center">
                <select
                  id="gender"
                  name="gender"
                  class="h-full rounded-md border-0 bg-transparent py-2 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option disabled selected>Pick one</option>
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
            <div class="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
              <div class=" flex items-center">
                <select
                  id="race"
                  name="race"
                  class="h-full rounded-md border-0 bg-transparent py-2 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option disabled selected>Pick one</option>
                  <option>Bangladeshi</option>
                </select>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
      {/* form -6 */}
      <div className="space-y-5">
        <div className="flex gap-12">
        <div className="w-full">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 "
              htmlFor="number"
            >
              Partner Age
            </label>
            <input
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
            <div class="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
              <div class=" flex items-center">
                <select
                  id="height"
                  name="height"
                  class="h-full py-2  rounded-md border-0 bg-transparent  pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option disabled selected>Pick one</option>
                  <option>5</option>
                  <option>5'1\"</option>
                  <option>5'2\"</option>
                  <option>5'3\"</option>
                  <option>5'4\"</option>
                  <option>5'5\"</option>
                  <option>5'6\"</option>
                  <option>5'7\"</option>
                  <option>5'8\"</option>
                  <option>5'9\"</option>
                  <option>5'10\"</option>
                  <option>5'11"</option>
                  <option>6</option>
                  <option>6'1\"</option>
                  <option>6'2\"</option>
                  <option>6'3\"</option>
                  <option>6'4\"</option>
                  <option>6'5\"</option>
                  <option>6'6\"</option>
                  <option>6'7\"</option>
                  <option>6'8\"</option>
                  <option>6'9\"</option>
                  <option>6'10\"</option>
                  <option>6'11\"</option>
                  <option>7</option>
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
            <div class="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
              <div class=" flex items-center">
                <select
                  id="weight"
                  name="weight"
                  class="h-full py-2  rounded-md border-0 bg-transparent  pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option disabled selected>Pick one</option>
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
            <button className="bg-gray-900 text-white px-6 py-2 w-1/2 rounded-lg font-semibold md:text-base sm:text-sm text-[12px] hover:bg-slate-900">
              Add Biodata
            </button>
          </div>
    </div>
  );
};

export default AddBiodata;
