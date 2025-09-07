import { useQuery } from "@tanstack/react-query";
import  { useState } from "react";
import BiodataCard from "./BiodataCard";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import './Biodatas.css'

const Biodatas = () => {
  const { totalBiodatas } = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const [loading, setLoading] = useState(true);
  const [division, setDivision] = useState("");
  const [gender, setGender] = useState("");
  const [age, setAge] = useState("");
   // get biodatas and send division value
   const { data: biodatas = [] } = useQuery({
    queryKey: ["biodatas", division,gender,age,currentPage,itemPerPage],
    queryFn: async () => {
      const res = await axiosPublic.get(`/biodatas?division=${division}&gender=${gender}&age=${age}&page=${currentPage}&size=${itemPerPage}`);
      setLoading(false);
      return res.data;
    },
  });
 
  // pagination
  const [itemPerPage, setItemPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const numbersOfPage = Math.ceil(totalBiodatas / itemPerPage);
  const pages = [...Array(numbersOfPage).keys()];

  const handlePerPageChange = (e) => {
    const val = parseInt(e.target.value);
    setItemPerPage(val);
    setCurrentPage(0)
  };

  const handlePrevPage = ()=>{
    if(currentPage > 0){
      setCurrentPage(currentPage - 1)
    }
  }
  const handleNextPage = ()=>{
    if(currentPage < pages.length-1){
      setCurrentPage(currentPage+1)
    }
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center my-80">
        <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-double border-4 border-r-0 border-l-0 border-b-sky-400 border-t-sky-700"></div>
      </div>
    );
  }

  return (
    <div className="flex gap-16 mt-10 mb-16">
      <Helmet>
        <title>Biodatas | WedlockBD</title>
      </Helmet>
      <div className="">
        <div className="w-full ">
          <h2 className="font-semibold">Filter by Division</h2>
          <div className="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
            <div className=" flex items-center">
              <select
                defaultValue={"default"}
                required
                id="gender"
                name="gender"
                onChange={(e) => setDivision(e.target.value)}
                className="h-full rounded-md border-0 bg-transparent py-2 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option disabled value="default">
                  Pick one
                </option>
                <option>Dhaka</option>
                <option>Chittagong</option>
                <option>Rangpur</option>
                <option>Barisal</option>
                <option>Khulna</option>
                <option>Maymansign</option>
                <option>Sylhet</option>
                <option>Rajshahi</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-full mt-4">
          <h2 className="font-semibold">Filter by Gender</h2>
          <div className="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
            <div className=" flex items-center">
              <select
                defaultValue={"default"}
                required
                id="gender"
                name="gender"
                onChange={(e) => setGender(e.target.value)}
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
        <div className="w-full mt-4">
          <h2 className="font-semibold">Filter by Age</h2>
          <div className="relative mt-1 rounded-md bg-gray-100  shadow-sm b">
            <div className=" flex items-center">
              <select
                defaultValue={"default"}
                required
                id="gender"
                name="gender"
                onChange={(e) => setAge(e.target.value)}
                className="h-full rounded-md border-0 bg-transparent py-2 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
              >
                <option disabled value="default">
                  Pick one
                </option>
                <option>20</option>
                <option>21</option>
                <option>22</option>
                <option>23</option>
                <option>24</option>
                <option>25</option>
                <option>26</option>
                <option>27</option>
                <option>28</option>
                <option>29</option>
                <option>30</option>
                <option>31</option>
                <option>32</option>
                <option>33</option>
                <option>34</option>
                <option>35</option>
                <option>36</option>
                <option>37</option>
                <option>38</option>
                <option>39</option>
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
              </select>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className=" flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {biodatas &&
            biodatas?.map((biodata) => (
              <BiodataCard key={biodata._id} biodata={biodata}/>
            ))}
        </div>
        {/* pagination */}
        <div className="my-16 flex items-center justify-center gap-5">
          <div className="pagination">
            <button onClick={handlePrevPage} className="bg-purple-200 py-2 rounded-md  px-3">prev</button>
            {pages?.map((page) => (
              <button 
              onClick={()=>setCurrentPage(page)}
              key={page} 
              className={currentPage === page ? 'selected' : ''}>
                {page+1}
              </button>
            ))}
             <button onClick={handleNextPage} className="bg-purple-200 py-2 rounded-md  px-3">next</button>
          </div>
          <div className="ml-10">
            <p className="-mt-1 mb-2">Select numbers of per page</p>
            <select
              className="p-2 -mt-4 bg-slate-200 rounded-md"
              value={itemPerPage}
              onChange={handlePerPageChange}
              name=""
              id=""
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="30">30</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodatas;
