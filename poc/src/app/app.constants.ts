export class AppConstants {

    public static QDMP_URI = 'http://192.168.6.153:3000/api/';
    public static GET_ORGANIZATION_DATA = AppConstants.QDMP_URI + 'organization';
    public static CREATE_ORGANIZATION = AppConstants.QDMP_URI + 'organization';

    public static DELETE_ORGANIZATION = function (orgId: string) {
        return AppConstants.QDMP_URI + `organization/${orgId}`;
      };
  

}