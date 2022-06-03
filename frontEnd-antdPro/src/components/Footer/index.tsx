import { DefaultFooter } from '@ant-design/pro-layout';

const Footer: React.FC = () => {

  return (
    <DefaultFooter
      copyright="@2022 四冥 版权所有"
      links={[
        {
          title: '赣ICP备2022001749号',
          href: 'https://beian.miit.gov.cn/',
        },
      ]}
    />
  );
};

export default Footer;
