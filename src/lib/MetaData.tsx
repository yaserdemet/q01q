interface MetaDataProps {
  meta?: Record<string, string>;
  title: string;
  description: string;
}
const defaultMeta: MetaDataProps = {
  title: "Q01Q - Learning Platform",
  description:
    "Build and deploy AI-powered chatbots with Q01Q, the ultimate platform for creating intelligent conversational agents.",
};

const MetaData = ({
  title = defaultMeta.title,
  description = defaultMeta.description,
}: MetaDataProps) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
};

export default MetaData;
