
import  Shopcarousel from './Shopcarousel'; 
import  OutlinedCard from './OutlinedCard'; 
import RecipeReviewCard from './RecipeReviewCard';
import CenteredTabs from './CenteredTabs';
 

function Shopdetail(){
    return(
        <>
         <CenteredTabs></CenteredTabs>
        <Shopcarousel></Shopcarousel>
        <OutlinedCard></OutlinedCard>
        <RecipeReviewCard></RecipeReviewCard>
        </>
    )
}
export default Shopdetail;