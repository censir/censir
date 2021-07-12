import styled from "styled-components";
import { useRouter } from "next/dist/client/router";

export const getStaticProps = async (ctx: any) => {
  console.log(ctx.params);

  return {
    paths: [],
    fallback: "blocking",
  };
};

export default function Country(): JSX.Element {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <h1>hi</h1>
    </div>
  );
}
