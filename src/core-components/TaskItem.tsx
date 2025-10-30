import ButtonIcon from '../components/buttonicon/ButtonIcon';
import Card from '../components/card/Card';
import InputCheckbox from '../components/inputcheckbox/InputCheckbox';
import Text from '../components/text/Text';

import TrashIcon from '../assets/icons/trash.svg?react';
import PencilIcon from '../assets/icons/pencil.svg?react';
import React, { useState } from 'react';
import InputText from '../components/inputtext/InputText';
import XIcon from '../assets/icons/x.svg?react';
import CheckIcon from '../assets/icons/check.svg?react';
import { TaskState, type Task } from '../models/task';
import { cx } from 'class-variance-authority';
import useTask from '../hooks/use-task';
import Skeleton from '../components/skeleton/Skeleton';

interface TaskItemProps {
  task: Task;
  loading?: boolean;
}

export default function TaskItem({ task, loading }: TaskItemProps) {
  const [isEditing, setIsEditing] = useState(task?.state === TaskState.Creating);

  const [taskTitle, setTaskTitle] = React.useState(task.title || '');
  const { updateTask, updateTaskStatus, deleteTask, isUpdatingTask, isDeletingTask } = useTask();

  function handleEditTask() {
    setIsEditing(true);
  }

  function handleExitEditTask() {
    if (task.state === TaskState.Creating) {
      deleteTask(task.id);
    }

    setIsEditing(false);
  }

  function handleChangeTaskTitle(e: React.ChangeEvent<HTMLInputElement>) {
    setTaskTitle(e.target.value || '');
  }

  async function handleSaveTask(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    await updateTask(task.id, { title: taskTitle });
    setIsEditing(false);
  }

  function handleChangeTaskStatus(e: React.ChangeEvent<HTMLInputElement>) {
    const checked = e.target.checked;

    updateTaskStatus(task.id, checked);
  }

  async function handleDeleteTask() {
    await deleteTask(task.id);
  }

  return (
    <Card size="md">
      {!isEditing ? (
        <div className="flex items-center gap-4">
          <InputCheckbox
            value={task?.concluded?.toString()}
            checked={task?.concluded}
            onChange={handleChangeTaskStatus}
            loading={loading}
          />
          {!loading ? (
            <Text className={cx('flex-1', { 'line-through': task?.concluded })}>{task?.title}</Text>
          ) : (
            <Skeleton className="h-6" />
          )}

          <div className="flex gap-1">
            <ButtonIcon
              icon={TrashIcon}
              variant="tertiary"
              onClick={handleDeleteTask}
              loading={loading}
              handling={isDeletingTask}
            />
            <ButtonIcon icon={PencilIcon} variant="tertiary" onClick={handleEditTask} loading={loading} />
          </div>
        </div>
      ) : (
        <form onSubmit={handleSaveTask} className="flex items-center gap-4">
          <InputText value={taskTitle} className="flex-1" onChange={handleChangeTaskTitle} required autoFocus />
          <div className="flex gap-1">
            <ButtonIcon type="button" icon={XIcon} variant="secondary" onClick={handleExitEditTask} />
            <ButtonIcon type="submit" icon={CheckIcon} variant="primary" handling={isUpdatingTask} />
          </div>
        </form>
      )}
    </Card>
  );
}
