import { stats } from "../constants";
import styles from "../style";
const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
      <div
        key={stat.id}
        className={`font-poppins flex-1 flex justify-start items-center flex-row m-3`}
      >
        <h4 className=" font-semibold text-white xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px]">
          {stat.value}
        </h4>
        <p className=" font-normal text-gradient uppercase xs:text-[20px] text-[15px] xs:leading-[26px] ml-3 leading-[21px]">
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;
