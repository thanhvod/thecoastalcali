import { connect } from 'react-redux';
import Routing from '../../routing';

import styles from './style.module.scss';

import { mapStateToProps, mapDispatchToProps } from './state';

export default connect(
  mapStateToProps,
  mapDispatchToProps
)((props: any) => {
  return (
    <>
      <div className={styles.mainRouting} id={'main-routing'}>
        <Routing />
      </div>
    </>
  );
});
