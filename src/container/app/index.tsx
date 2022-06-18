import { connect } from 'react-redux';
import Routing from '../../routing';

import Navbar from '../../component/navbar';
import styles from './style.module.scss';

import { mapStateToProps, mapDispatchToProps } from './state';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)((props: any) => {
  return (
    <>
      <Navbar />
      <div className={styles.mainRouting} id={'main-routing'}>
        <Routing />
      </div>
    </>
  );
});
