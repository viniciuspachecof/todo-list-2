import ButtonIcon from '../components/buttonicon/ButtonIcon';
import Card from '../components/card/Card';
import InputCheckbox from '../components/inputcheckbox/InputCheckbox';
import Text from '../components/text/Text';

import TrashIcon from '../assets/icons/trash.svg?react';
import PencilIcon from '../assets/icons/pencil.svg?react';
import { useState } from 'react';
import InputText from '../components/inputtext/InputText';
import XIcon from '../assets/icons/x.svg?react';
import CheckIcon from '../assets/icons/check.svg?react';
import { TaskState, type Task } from '../models/task';
import { cx } from 'class-variance-authority';

interface TaskItemProps {
  task: Task;
}

export default function TaskItem({ task }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task?.state === TaskState.Creating);

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    setIsEditing(false);
  }

  return (
    <Card size="md" className="flex items-center gap-4">
      {!isEditing ? (
        <>
          <InputCheckbox value={task?.concluded?.toString()} checked={task?.concluded} />
          <Text className={cx('flex-1', { 'line-through': task?.concluded })}>{task?.title}</Text>
          <div className="flex gap-1">
            <ButtonIcon icon={TrashIcon} variant="tertiary" />
            <ButtonIcon icon={PencilIcon} variant="tertiary" onClick={handleEditTask} />
          </div>
        </>
      ) : (
        <>
          <InputText className="flex-1" />
          <div className="flex gap-1">
            <ButtonIcon icon={XIcon} variant="secondary" onClick={handleExitEditTask} />
            <ButtonIcon icon={CheckIcon} variant="primary" />
          </div>
        </>
      )}
    </Card>
  );
}
