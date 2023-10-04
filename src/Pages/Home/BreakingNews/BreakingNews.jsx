
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex mb-5">
            <button className="btn btn-secondary ">Secondary</button>

            <div className="items-center">
                <Marquee>
                    Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as... Match Highlights: Germany vs Spain — as it happened   !.....
                </Marquee>
            </div>
        </div>
    );
};

export default BreakingNews;