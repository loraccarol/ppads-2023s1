import { useState } from 'react';
import { Button, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';

export default function ModalCriar({ title, body, isopen, open, close }) {
  return (
    <>
      <Button onClick={open}>{title}</Button>

      <Modal isOpen={isopen} onClose={close}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{body}</ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}