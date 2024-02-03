# Next.js blog

<div>
<img alt="Static Badge" src="https://img.shields.io/badge/Next-black">
<img alt="Static Badge" src="https://img.shields.io/badge/React-61dafb">
<img alt="Static Badge" src="https://img.shields.io/badge/TypeScript-3178c6">
</div>

This simple blog project involved playing with the routing proposed by Next.js. It consists of a home page, a page listing posts and a page listing users. Additionally, each post and user has its own dedicated page. These pages are generated using Next's static rendering and `getStaticProps`. The post and user own pages use dynamic paths and `getStaticPaths`. Although not used in this case, I was able to study the `revalidate` and `fallback` properties, as well as the `gtServerSideProps` function. 

<br/><br/>

<p align="center">
  <img src="public/assets/README/Screenshot_homepage.png" alt="Screenshot of the homepage" width="600"/>
</p>