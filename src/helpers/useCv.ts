import CvEn from 'assets/cv_en.pdf';
import CvRu from 'assets/cv_ru.pdf';

const useCv = (lang = 'en') => {
  switch (lang) {
    case 'en':
      return CvEn;
    case 'ru':
      return CvRu;
    default:
      return CvEn;
  }
};

export default useCv;
