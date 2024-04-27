import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";


const MyArtAndCraft = () => {
    const items = useLoaderData()
    console.log(items)
    return (
        <div className="mt-12">
            <div className="text-center mb-8">
                <h1 className="text-4xl font-poppins font-bold">My Art & Craft List</h1>
                <h3 className="md:w-3/5 md:mx-auto font-inter text-base mt-8 text-[#7F7D7D]">I would be happy to help! Could you provide a bit more detail about what specific types of art and craft items are on your list? For example, are you interested in painting, drawing, knitting, pottery, or any other specific crafts? The more information you provide, the better I can tailor my descriptions to your interests.</h3>
            </div>
            <div  className="md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-5 md:gap-3 gap-2 space-y-4 md:space-y-0 md:mx-8">
            {
                items.map(item => <Card key={item._id} item={item}></Card>)
            }
            </div>
        </div>
    );
};

export default MyArtAndCraft;