export default function Description({ className, children }) {
  const styles = `text-dark text-start lg:text-[29px] col-span-2 ${
    className ? className : ""
  }`;
  return <div className={styles}>{children}</div>;
}
