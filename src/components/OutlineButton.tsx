import Button from 'components/Button';

interface Props {
  name: string,
  link: string,
  downloadFileName?: string,
  target?: string,
}

const OutlineButton = ({
  name, link, downloadFileName, target,
}: Props) => (
  downloadFileName
    ? (<Button href={link} download={downloadFileName}>{ name }</Button>)
    : (<Button href={link} target={target}>{ name }</Button>)
);

OutlineButton.defaultProps = {
  downloadFileName: '',
  target: '_self',
};

export default OutlineButton;
