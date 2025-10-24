import Badge from '../components/badge/Badge';
import Button from '../components/button/Button';
import ButtonIcon from '../components/buttonicon/ButtonIcon';
import Card from '../components/card/Card';
import Container from '../components/container/Container';
import Icon from '../components/icon/Icon';
import InputCheckbox from '../components/inputcheckbox/InputCheckbox';
import InputText from '../components/inputtext/InputText';
import Skeleton from '../components/skeleton/Skeleton';
import Text from '../components/text/Text';

import TrashIcon from '../assets/icons/trash.svg?react';
import CheckIcon from '../assets/icons/check.svg?react';
import XIcon from '../assets/icons/x.svg?react';
import PencilIcon from '../assets/icons/pencil.svg?react';
import PlusIcon from '../assets/icons/plus.svg?react';
import SpinnerIcon from '../assets/icons/spinner.svg?react';

export default function PageComponents() {
  return (
    <Container>
      <div className="grid gap-3">
        <div className="flex flex-col gap-2">
          <Text variant="body-sm-bold" className="text-pink-base">
            Olá mundo!
          </Text>
          <Text className="text-green-base">Olá mundo!</Text>
          <Text variant="body-md-bold">Olá mundo!</Text>
          <Text>Levar o dog pra passear</Text>
        </div>

        <div className="flex gap-1">
          <Icon svg={TrashIcon} className="fill-green-base" />
          <Icon svg={CheckIcon} />
          <Icon svg={PlusIcon} />
          <Icon svg={SpinnerIcon} />
          <Icon svg={PencilIcon} />
          <Icon svg={XIcon} />
        </div>

        <div className="flex gap-1">
          <Badge variant="secondary">5</Badge>
          <Badge variant="primary">2 de 5</Badge>
          <Badge loading>5</Badge>
        </div>

        <div>
          <Button icon={PlusIcon}>Nova Tarefa</Button>
        </div>

        <div className="flex gap-1">
          <ButtonIcon icon={TrashIcon} />
          <ButtonIcon icon={TrashIcon} variant="secondary" />
          <ButtonIcon icon={TrashIcon} variant="tertiary" />
          <ButtonIcon icon={TrashIcon} loading />
        </div>

        <div>
          <InputText />
        </div>

        <div>
          <InputCheckbox />

          <InputCheckbox loading />
        </div>

        <div>
          <Card size="md">Olá mundo</Card>
        </div>

        <div className="space-y-2">
          <Skeleton className="h-6" />
          <Skeleton className="h-6" />
          <Skeleton className="w-96" />
        </div>
      </div>
    </Container>
  );
}
