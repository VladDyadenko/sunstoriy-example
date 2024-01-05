import { useSelector } from 'react-redux';
import { Popconfirm } from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import { CirclesWithBar } from 'react-loader-spinner';
import { Popover } from 'antd';
import {
  IconLessonDelete,
  IconLessonEdit,
  IconLessonSee,
} from 'components/ChoseLessonData/ScheduleCard/ScheduleCard.styled';
import {
  ButtonContainer,
  CardLessonCopy,
  CardLessonLink,
  DescrDeleteBtn,
  IconButtonChose,
  IconButtonCopy,
  InfoChild,
  InfoColor,
  InfoContainer,
  InfoTeacher,
  LessonButton,
  LessonDelete,
  LessonEdit,
  Wrapper,
} from './LessonTableCard.styled';
import { selectOfficesOperetion } from 'redux/offices/officesSelector';

function LessonTableCard({ lesson, onLessonsDelete }) {
  const operetion = useSelector(selectOfficesOperetion);

  const lessonCopy = {
    childName: lesson.childName,
    childSurname: lesson.childSurname,
    child: lesson.child,
    teacherColor: lesson.teacherColor,
    teacher: lesson.teacher,
    teacherName: lesson.teacherName,
    teacherSurname: lesson.teacherSurname,
    office: lesson.office,
  };

  const content = (
    <ButtonContainer>
      <CardLessonLink to={`/lesson/${lesson._id}?source=buttonViewing`}>
        Переглянути
        <IconLessonSee />
      </CardLessonLink>
      <CardLessonCopy
        to={`/lesson?lessonCopy=${encodeURIComponent(
          JSON.stringify(lessonCopy)
        )}`}
      >
        Копіювати
        <IconButtonCopy />
      </CardLessonCopy>
      <LessonEdit to={`/lesson/${lesson._id}`}>
        Редагувати
        <IconLessonEdit />
      </LessonEdit>
      <Popconfirm
        title="Видалити заняття"
        description="Ви впевнені, що хочете видалити заняття?"
        icon={
          <QuestionCircleOutlined
            style={{
              color: 'red',
            }}
          />
        }
        onConfirm={() => {
          onLessonsDelete(lesson);
        }}
      >
        <LessonDelete>
          {operetion === lesson._id ? (
            <CirclesWithBar
              height="24"
              width="24"
              color="#ffffff"
              wrapperStyle={{}}
              visible={true}
              ariaLabel="circles-with-bar-loading"
            />
          ) : (
            <DescrDeleteBtn>
              Видалити
              <IconLessonDelete />
            </DescrDeleteBtn>
          )}
        </LessonDelete>
      </Popconfirm>
    </ButtonContainer>
  );
  return (
    <Wrapper>
      <InfoContainer>
        <InfoChild>Дитина:</InfoChild>
        <InfoChild>
          {lesson.childName} {lesson.childSurname}
        </InfoChild>
        <InfoTeacher>Фахівець:</InfoTeacher>
        <InfoTeacher>
          {lesson.teacherName} {lesson.teacherSurname}
        </InfoTeacher>
      </InfoContainer>
      <InfoColor aria-current={lesson ? lesson.teacherColor : ''}>
        <Popover content={content} title="Внесіть зміни:">
          <LessonButton type="primary">
            <IconButtonChose />
          </LessonButton>
        </Popover>
      </InfoColor>
    </Wrapper>
  );
}

export default LessonTableCard;
