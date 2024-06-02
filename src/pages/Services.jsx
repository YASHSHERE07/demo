import React from "react";

const Services = () => {
  const services = [
    "Offer letter within 24 hours",
    "College Change",
    "Second year Programs",
    "Special seats for Skilled Programs",
    "Special seats for Health care Programs",
  ];

  return (
    <section className="py-16">
      <h1 className=" text-center mt-10 text-4xl font-bold">Our Services</h1>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white">
          <div className=" mx-40">
            <h2 className="text-4xl font-bold text-black mb-16">
              Offer letter within 24 hours{" "}
            </h2>
            <p className="mb-8 text-black text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia
              dolorem excepturi repellat enim ullam autem, reprehenderit iusto
              laudantium quo, porro voluptates molestias possimus ab tempora
              rerum cupiditate ratione deserunt?Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Soluta asperiores officia delectus
              omnis vel nulla illum vero ducimus commodi expedita, obcaecati
              magni esse officiis, animi fuga! Tempora fuga velit rerum.
            </p>
            <a
              href="#learn-more"
              className=" text-black border-black hover:border-blue-700 border-2 hover:text-blue-700 font-bold py-2 px-6 rounded-full"
            >
              See More
            </a>
          </div>
          <div className="m-20">
            <img
              src="https://img.freepik.com/free-photo/indoor-image-cute-plus-size-young-woman-sitting-mat-front-open-laptop-watching-online-video-tutorial-by-professional-fitness-instructor-exercising-from-home-because-social-distancing_343059-2043.jpg?t=st=1717130603~exp=1717134203~hmac=a3680b313ea56bd28f32cf823589d992c0def6a1ee20e2ec4f7da13eec699e4f&w=1380"
              alt="Fitness"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="m-20">
            <img
              src="https://img.freepik.com/free-photo/sports-brunette-woman-sportswear-training-gym_1157-30614.jpg?t=st=1717130865~exp=1717134465~hmac=d7db30d6876546dfd02ac67fa7c0f83063ed2dcdd12f128fc00ff2400e30585c&w=1380"
              alt="Fitness"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className=" mx-40">
            <h2 className="text-4xl font-bold text-black mb-16">
              College Change{" "}
            </h2>
            <p className="mb-8 text-lg text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              quidem pariatur quas, consectetur vitae praesentium nostrum itaque
              nesciunt placeat dolores expedita explicabo dolorem officiis
              molestiae voluptatibus vel et, alias est! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Excepturi consequuntur, non
              ipsum commodi nemo distinctio deleniti iure ullam molestiae rerum
              sapiente! Doloribus, assumenda at tempore omnis qui quidem
              eligendi officiis.{" "}
            </p>
            <a
              href="#learn-more"
              className=" text-black border-black hover:border-blue-700 border-2 hover:text-blue-700 font-bold py-2 px-6 rounded-full"
            >
              See More
            </a>
          </div>

          <div className=" mx-40">
            <h2 className="text-4xl font-bold text-black mb-16">
              Second year Programs{" "}
            </h2>
            <p className="mb-8 text-black text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia
              dolorem excepturi repellat enim ullam autem, reprehenderit iusto
              laudantium quo, porro voluptates molestias possimus ab tempora
              rerum cupiditate ratione deserunt?Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Soluta asperiores officia delectus
              omnis vel nulla illum vero ducimus commodi expedita, obcaecati
              magni esse officiis, animi fuga! Tempora fuga velit rerum.
            </p>
            <a
              href="#learn-more"
              className=" text-black border-black hover:border-blue-700 border-2 hover:text-blue-700 font-bold py-2 px-6 rounded-full"
            >
              See More
            </a>
          </div>
          <div className="m-20">
            <img
              src="https://img.freepik.com/free-photo/indoor-image-cute-plus-size-young-woman-sitting-mat-front-open-laptop-watching-online-video-tutorial-by-professional-fitness-instructor-exercising-from-home-because-social-distancing_343059-2043.jpg?t=st=1717130603~exp=1717134203~hmac=a3680b313ea56bd28f32cf823589d992c0def6a1ee20e2ec4f7da13eec699e4f&w=1380"
              alt="Fitness"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div className="m-20">
            <img
              src="https://img.freepik.com/free-photo/sports-brunette-woman-sportswear-training-gym_1157-30614.jpg?t=st=1717130865~exp=1717134465~hmac=d7db30d6876546dfd02ac67fa7c0f83063ed2dcdd12f128fc00ff2400e30585c&w=1380"
              alt="Fitness"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className=" mx-40">
            <h2 className="text-4xl font-bold text-black mb-16">
              Special seats for Skilled Programs{" "}
            </h2>
            <p className="mb-8 text-lg text-black">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
              quidem pariatur quas, consectetur vitae praesentium nostrum itaque
              nesciunt placeat dolores expedita explicabo dolorem officiis
              molestiae voluptatibus vel et, alias est! Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Excepturi consequuntur, non
              ipsum commodi nemo distinctio deleniti iure ullam molestiae rerum
              sapiente! Doloribus, assumenda at tempore omnis qui quidem
              eligendi officiis.{" "}
            </p>
            <a
              href="#learn-more"
              className=" text-black border-black hover:border-blue-700 border-2 hover:text-blue-700 font-bold py-2 px-6 rounded-full"
            >
              See More
            </a>
          </div>

          <div className=" mx-40">
            <h2 className="text-4xl font-bold text-black mb-16">
              Special seats for Health care Programs
            </h2>
            <p className="mb-8 text-black text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quia
              dolorem excepturi repellat enim ullam autem, reprehenderit iusto
              laudantium quo, porro voluptates molestias possimus ab tempora
              rerum cupiditate ratione deserunt?Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Soluta asperiores officia delectus
              omnis vel nulla illum vero ducimus commodi expedita, obcaecati
              magni esse officiis, animi fuga! Tempora fuga velit rerum.
            </p>
            <a
              href="#learn-more"
              className=" text-black border-black hover:border-blue-700 border-2 hover:text-blue-700 font-bold py-2 px-6 rounded-full"
            >
              See More
            </a>
          </div>
          <div className="m-20">
            <img
              src="https://img.freepik.com/free-photo/indoor-image-cute-plus-size-young-woman-sitting-mat-front-open-laptop-watching-online-video-tutorial-by-professional-fitness-instructor-exercising-from-home-because-social-distancing_343059-2043.jpg?t=st=1717130603~exp=1717134203~hmac=a3680b313ea56bd28f32cf823589d992c0def6a1ee20e2ec4f7da13eec699e4f&w=1380"
              alt="Fitness"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
