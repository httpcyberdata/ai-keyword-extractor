import React from 'react'
import { Text,
		 Button, 
		 Modal,
		 ModalOverlay,
		 ModalContent,
		 ModalHeader,
		 ModalBody,
		 ModalCloseButton,
		 CircularProgress
	  	} from '@chakra-ui/react';
const KeywordsModals = ({ keywords, loading, isOpen, closeModal }) => {
	return (
		<div>
			<Modal isOpen={isOpen} onClose={closeModal}>
				<ModalOverlay />
				<ModalHeader>
					Keywords
				</ModalHeader>
				<ModalCloseButton/>
				<ModalBody display='flex' alignItems='center'>

				</ModalBody>
			</Modal>
		</div>
	)
}

export default KeywordsModals