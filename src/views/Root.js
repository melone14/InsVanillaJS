import DisplayBreweries from 'components/organisms/DisplayBreweries/DisplayBreweries';
import useModal from 'hooks/useModal';

const Root = () => {
  const { Modal, isOpen, handleOpenModal, handleCloseModal } = useModal();

  return (
    <>
      {isOpen ? <Modal handleClose={handleCloseModal} /> : null}
      <DisplayBreweries itemsPerPage={10} />
    </>
  );
};

export default Root;
