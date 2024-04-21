import PaginationUser from "../../components/pagination/PaginationUser";

const ViewAdminUsers = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '76vh' }}>
      <div style={{ flex: 1 }}>
        <h1 className="color-letras text-center py-3">ADMINISTRACION DE USUARIOS</h1>
        <PaginationUser/>
      </div>
    </div>
  );
}

export default ViewAdminUsers;