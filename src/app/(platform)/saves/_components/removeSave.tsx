'use client';

import { Button } from '@/components/ui/button';
import axios from 'axios';
import { Loader, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'sonner';

interface Props {
  saveId: string;
}

const RemoveSave = ({ saveId }: Props) => {
  const [isRemoving, setIsRemoving] = useState(false);
  const router = useRouter();

  const handleRemoveSave = async () => {
    try {
      const res = await axios.delete(`/api/save/${saveId}`);

      if (res.status === 201) {
        router.refresh();
        toast('Save is removed');
      }
    } catch {
      toast('Something went wrong', {
        className: 'bg-rose-500 text-white',
      });
    } finally {
      setIsRemoving(false);
    }
  };

  return (
    <Button disabled={isRemoving} variant={'destructive'} onClick={handleRemoveSave}>
      {isRemoving ? <Loader className="animate-spin" /> : <Trash />}
    </Button>
  );
};

export default RemoveSave;
