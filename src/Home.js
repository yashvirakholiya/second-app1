import React from 'react';
import PrimarySearchAppBar from './AppSearchBar';
import CustomizedMenus from './CustomizedMenus';
import CenteredTabs from './CenteredTabs';
/* import AdvancedImageList from './AdvancedImageList'; */
import BreakpointDown from './BreakpointDown';
/* import MediaControlCard from './MediaControlCard'; */
import RecipeReviewCard from './RecipeReviewCard';
import ComplexGrid from './ComplexGrid';
import FlexDirection from './FlexDirection';
import  Carousal from './Carousal';
import Footer from './Footer';
 
function Home (){ 
    return (
        <>
          <PrimarySearchAppBar></PrimarySearchAppBar>
          <CustomizedMenus></CustomizedMenus>
          <CenteredTabs></CenteredTabs>
          <Carousal></Carousal>
          {/* <AdvancedImageList></AdvancedImageList> */}
          <BreakpointDown></BreakpointDown>
          {/*  <MediaControlCard></MediaControlCard>  */}
          <FlexDirection></FlexDirection>
          <RecipeReviewCard></RecipeReviewCard>
          <Footer></Footer>
          {/* <ComplexGrid></ComplexGrid> */}
        </>
    )
}
export default Home;