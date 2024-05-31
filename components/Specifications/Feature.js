export default function Feature({ className, children }) {
  const styles = `text-gray w-fit lg:text-[29px] ${className ? className : ""}`;
  return <div className={styles}>{children}</div>;
}
