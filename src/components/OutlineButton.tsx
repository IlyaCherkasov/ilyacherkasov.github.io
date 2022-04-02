import Button from 'components/Button';

interface Props {
  name: string,
  link: string,
  downloadFileName?: string,
}

const OutlineButton = ({ name, link, downloadFileName }: Props) => (
  downloadFileName
    ? (<Button href={link} download={downloadFileName}>{ name }</Button>)
    : (<Button href={link}>{ name }</Button>)
);

OutlineButton.defaultProps = {
  downloadFileName: '',
};

export default OutlineButton;
