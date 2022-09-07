import React from 'react'
import {Button, ModalHeader, ModalBody, ModalFooter,Modal } from 'reactstrap';
export default function Create({modal,toggle}) {
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
            <ModalBody>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            llit anim id est laborum.
            </ModalBody>
        <ModalFooter>
          <Button color="dark text-warning" onClick={toggle}>
            Done
          </Button>{' '}
          <Button color="btn btn-ligh text-warning" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
</div>
  )
}
