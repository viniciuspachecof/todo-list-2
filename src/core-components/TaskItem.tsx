import ButtonIcon from '../components/buttonicon/ButtonIcon';
import Card from '../components/card/Card';
import InputCheckbox from '../components/inputcheckbox/InputCheckbox';
import Text from '../components/text/Text';

import TrashIcon from '../assets/icons/trash.svg?react';
import PencilIcon from '../assets/icons/pencil.svg?react';
import XIcon from '../assets/icons/x.svg?react';
import CheckIcon from '../assets/icons/check.svg?react';

export default function TaskItem() {
  return (
    <Card size="md" className="flex items-center gap-4">
      <InputCheckbox />
      <Text className="flex-1">Fazer compras da semana</Text>
      <div className="flex gap-1">
        <ButtonIcon icon={TrashIcon} variant="tertiary" />
        <ButtonIcon icon={PencilIcon} variant="tertiary" />
      </div>
    </Card>
  );
}
