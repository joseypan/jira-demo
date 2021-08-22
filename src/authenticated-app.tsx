import { ProjectListScreen } from "../src/views/project-list";
import { useAuth } from "./context/auth-context";
import styled from "@emotion/styled";
import { Row } from "./components/lib";
export const AuthenticatedApp = () => {
  const { logout } = useAuth();
  return (
    <Contianer>
      <PageHeader between={true}>
        <HeaderLeft gap={true}>
          <h2>logo</h2>
          <h2>项目</h2>
          <h2>用户</h2>
        </HeaderLeft>
        <HeaderRight>
          <button onClick={() => logout()}>登出</button>
        </HeaderRight>
      </PageHeader>
      <Main>
        <ProjectListScreen></ProjectListScreen>
      </Main>
    </Contianer>
  );
};
const Contianer = styled.div`
  display: grid;
  grid-template-rows: 6rem 1fr 6rem;
  height: 100vh;
`;
const PageHeader = styled(Row)`
  flex-direction: row;
  height: 6rem;
  background-color: gray;
`;
const HeaderLeft = styled(Row)``;
const HeaderRight = styled.div``;
const Main = styled.main`
  height: calc(100vh - 6rem);
`;
