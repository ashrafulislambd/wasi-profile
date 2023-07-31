import React from "react";
import Header from "./components/Header";
import Gallery from "./components/Gallery";
import Year from "./components/Years";

export default () => (
  <>
    <Header/>
    <div id="content" class="container px-20">                               

<h2 className="font-bold text-2xl">Photos</h2>
<Gallery links={[
  ["src/images/main/DSC_1525.jpg", "Wasi", "", ""],
  ["src/images/main/IMG-20221223-WA0127.jpg", "Wasi", "", ""],
  ["src/images/main/IMG-20230615-WA0021.jpg", "Wasi", "", ""],
  ["src/images/main/IMG20230325155146.jpg", "Wasi", "", ""],
]} />

<h2 className="font-bold text-2xl">Biography </h2>

<table className="my-10 w-full border">
    <tr>
      <th className="bg-blue-100">Name</th>
      <td classname="px-10 bg-gray-300">Wasi Arman Mostafa</td>
    </tr>
    <tr>
      <th className="bg-blue-100">Born</th>
      <td classname="px-10 bg-gray-300">24 January 2004</td>
    </tr>
    <tr>
      <th className="bg-blue-100">Nickname</th>
      <td classname="px-10 bg-gray-300">Ohi</td>
    </tr>
    <tr>
      <th className="bg-blue-100">Religion</th>
      <td classname="px-10 bg-gray-300">Islam</td>
    </tr>
    <tr>
      <th className="bg-blue-100">Denomination</th>
      <td classname="px-10 bg-gray-300">Sunni</td>
    </tr>
    <tr>
      <th className="bg-blue-100">Jurisprudence</th>
      <td classname="px-10 bg-gray-300">Hanafi</td>
    </tr>
    <tr>
      <th className="bg-blue-100">Height</th>
      <td classname="px-10 bg-gray-300">5'9"</td>
    </tr>
    <tr>
      <th className="bg-blue-100">Awards</th>
      <td classname="px-10 bg-gray-300">President Scout Award</td>
    </tr>
    <tr>
      <th className="bg-blue-100">Main Interests</th>
      <td classname="px-10 bg-gray-300">Islamic Movement, Cricket, Football, Scouting, Writing, Social Works.</td>
    </tr>
    <tr>
      <th className="bg-blue-100">Favorite Islamic Scholars</th>
      <td classname="px-10 bg-gray-300">Mamunul Haque, Mizanur Rahman Azhari, Tariq Jamil, Dr. Anayetullah Abbasi, Moniruzzaman Selim, Abu Taw-ha Mohammad Adnan, Sayed Mokarram Bari.</td>
    </tr>
  </table>



<h2 className="font-bold text-2xl">Scouting </h2>

<p>Former Senior Petrol Leader of Adamjee Cantonment Public School Scout Group. Achieved the "President Scout Award". Which is the highest award in Bangladesh Scout.

Member of "Association Of Top Achievers Scouts - Bangladesh" (ATAS BD). Membership No : ATAS-BD #967 </p>


<Gallery links={[
  ["src/images/scouting/IMG_20200228_120753.jpg", "Wasi", "", ""],
  ["src/images/scouting/7b30a87a.jpg", "Wasi", "", ""],
  ["src/images/scouting/DSC_1525.jpg", "Wasi", "", ""],
  ["src/images/scouting/FB_IMG_1566724156047.jpg", "Wasi", "", ""],
  ["src/images/scouting/FB_IMG_1566724156047.jpg", "Wasi", "", ""],
  ["src/images/scouting/IMG-20230129-WA0013.jpg", "Wasi", "", ""],
  ["src/images/scouting/IMG-20230209-WA0002.jpg", "Wasi", "", ""],
]} />



<h2 className="font-bold text-2xl">Football</h2> 

<p>In 2018-2019 played as a defender & Mid-Fielder in "Adamjee Cantonment Public School-Inter House Annual Football Competition".</p>

<Gallery links={[
  ["src/images/football/FB_IMG_1569638058878.jpg", "", "", ""],
  ["src/images/football/received_384594492216451.jpeg", "", "", ""],
  ["src/images/football/received_613208062540116.jpeg", "", "", ""],
]} />


<h2 className="font-bold text-2xl">Cricket</h2>

<table className="border my-10">
  <tr>
    <th className="text-left bg-blue-100">Team</th>
    <td>Aswad Sports Cricket Academy, Bangladesh</td>
  </tr>
  <tr>
    <th className="text-left bg-blue-100">Batting Style</th>
    <td>Right Handed</td>
  </tr>
  <tr>
    <th className="text-left bg-blue-100">Bowling Style</th>
    <td>Right Arm Off-Break</td>
  </tr>
</table>


<p>Joined "Aswad Sports Cricket Club" as a professional cricketer in 2020. Although he started his career as a bowler, he is currently working on improving his batting as per his coach's advice.</p>
<br/>
<p>Played Sheikh Russel Memory Cricket Tournament - 2022.</p>
<p>Bangabandhu Gold Cup T20 Cricket Tournament, Gopalganj - 2022.</p>
<br/>
<p>Played "5th DRM Cup u19 Men Cricket Tournament - 2022, Adra, India", is his first international cricket tournament. Organized by "South Eastern Railway Sports Association, India".</p>
<br/>
<p>Participated in "PKCSBD - Talent Hunt" in 2020 as Right Arm Off Break Bowler. In the 1st Season, moved up to the division level and earned the Division Winner Award Certificate. Finally, dropped out from the National Level Trial.</p>
<br/>
<p>Favorite Cricket Player: Mahendra Singh Dhoni.</p>


<Gallery links={[
  ["src/images/cricket/FB_IMG_1647791072602.jpg", "", "", ""],
  ["src/images/cricket/IMG_20220308_114942.jpg", "", "", ""],
  ["src/images/cricket/IMG_20220308_134357.jpg", "", "", ""],
  ["src/images/cricket/IMG_20220523_110917.jpg", "", "", ""],
  ["src/images/cricket/IMG-20220820-WA0015.jpg", "", "", ""],
  ["src/images/cricket/IMG-20220910-WA0002.jpg", "", "", ""],
  ["src/images/cricket/IMG-20220917-WA0000.jpg", "", "", ""],
  ["src/images/cricket/IMG-20220925-WA0001.jpg", "", "", ""],
  ["src/images/cricket/IMG-20221219-WA0041.jpg", "", "", ""],
  ["src/images/cricket/IMG-20221221-WA0064.jpg", "", "", ""],
  ["src/images/cricket/IMG-20221225-WA0042.jpg", "", "", ""],
  ["src/images/cricket/IMG-20221225-WA0054.jpg", "", "", ""],
  ["src/images/cricket/received_298488798514420.jpeg", "", "", ""],
  ["src/images/cricket/received_772800450493571.jpeg", "", "", ""],
  ["src/images/cricket/received_799106374570672.jpeg", "", "", ""],
  ["src/images/cricket/received_1105008507074085.jpeg", "", "", ""],
  ["src/images/cricket/received_1115769589177958.jpeg", "", "", ""],
  ["src/images/cricket/received_1742059092953220.jpeg", "", "", ""],
]} />


<h2 className="font-bold text-2xl">Co-Curriculum Activities</h2>

<ol class="list-decimal ml-20">
  <li>Founding President of Conglomerate (2020-2022).</li>
  <li>Joint Secretary of BAF Shaheen College, Kurmitola Writers Club.</li>
  <li>Former Member of Adamjee School Debating Club.</li>
  <li>General Member of BAF Shaheen College, Kurmitola IT Club.</li>
</ol>

<Year entities={
  [
    [2016, '3rd Place in "Story Telling Competition" at "Adamjee Cantonment Public School Cultural Week 2016".'],
    [2017, 'Participated in "14th Dhaka Metropolitan Scouts Assembly 2017, Bahadurpur, Gazipur". Participated in the "26th March Independence Day Parade" from Bangladesh Scout.'],
    [2019, 'Participated in the "26th March Independence Day Parade" from Adamjee Cantonment Public School.'],
    [2020, 'Participated in the 2020 President Scout Award Exam. The results were published in 2022, achieved the highest award of Bangladesh Scout.'],
    [2021, 'Attended Scout\'s national and international online courses and camps in 2020-2021 during the Corona period. Like "JOTA-JOTI", "Online Badge Course" etc.'],
    [2022, 'Played Sheikh Russel Memory Cricket Tournament - 2022. Bangabandhu Gold Cup T20 Cricket Tournament, Gopalganj - 2022. Played "5th DRM Cup u19 Men Cricket Tournament - 2022, Adra, India", is his first international cricket tournament. Organized by "South Eastern Railway Sports Association, India".'],
    [2023, 'Participated in "Clemon Cup Cricket Tournament, Rajshahi". Participates in "32nd Asia Pacific Regional & 11th National Scout Jumboree,2023" Selected For ISSB from "Bangladesh Navy"']
  ]
} />


<Gallery links={[
  ["src/images/cocurriculumn/DSC_1523.jpg", "", "", ""],
  ["src/images/cocurriculumn/DSC_6790 (1).jpg", "", "", ""],
  ["src/images/cocurriculumn/FB_IMG_1553681225393.jpg", "", "", ""],
  ["src/images/cocurriculumn/FB_IMG_1553876218473.jpg", "", "", ""],
  ["src/images/cocurriculumn/FB_IMG_1690135937223.jpg", "", "", ""],
  ["src/images/cocurriculumn/IMG_6389.JPG", "", "", ""],
  ["src/images/cocurriculumn/IMG_20191018_084258.jpg", "", "", ""],
  ["src/images/cocurriculumn/IMG_20220308_134354.jpg", "", "", ""],
  ["src/images/cocurriculumn/IMG-20220820-WA0011.jpg", "", "", ""],
  ["src/images/cocurriculumn/IMG-20221030-WA0003.jpg", "", "", ""],
  ["src/images/cocurriculumn/IMG-20221218-WA0045.jpg", "", "", ""],
  ["src/images/cocurriculumn/IMG-20221218-WA0063.jpg", "", "", ""],
  ["src/images/cocurriculumn/IMG-20221219-WA0038.jpg", "", "", ""],
  ["src/images/cocurriculumn/IMG-20230321-WA0026.jpg", "", "", ""],
  ["src/images/cocurriculumn/IMG-20230321-WA0028.jpg", "", "", ""],
  ["src/images/cocurriculumn/IMG-20230615-WA0007.jpg", "", "", ""],
  ["src/images/cocurriculumn/IMG-20230615-WA0021.jpg", "", "", ""],
  ["src/images/cocurriculumn/IMG-20230615-WA0022.jpg", "", "", ""],
  ["src/images/cocurriculumn/IMG-20230623-WA0005.jpg", "", "", ""],
  ["src/images/cocurriculumn/received_355136156457701.jpeg", "", "", ""],
]} />

    </div>
    

    <footer class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Wasi Arman Mostafa</span>
      </a>
      
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 id="sponsor" class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONTACT</h2>
        <nav class="list-none mb-10">
          <li><span className="font-bold">Email:</span> <a className="font-medium underline hover:text-blue-300" href="mailto:wasiohi019@gmail.com">wasiohi019@gmail.com</a></li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 id="sponsor" class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">SPONOSOR</h2>
        <nav class="list-none mb-10">
        <img src="src/sponsor/FB_IMG_1690135937223.jpg" />
        Arafin Sports Shop Limited
                  <br/>Buy cricket products at best prices from <a className="font-medium underline hover:text-blue-300" href="https://www.facebook.com/allproducts.sports.shop.bd?mibextid=ZbWKwL">here</a>
        </nav>
      </div>
      
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Wasi Arman Mostafa — Developed by
        <a href="https://messenger.com/t/acps.ashraful" rel="noopener noreferrer" class="font-medium underline hover:text-blue-300 ml-1" target="_blank">iRonic</a>
      </p>
      { /* <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span> */ }
    </div>
  </div>
</footer>
  </>
);
