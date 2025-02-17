import type { LocalizationResource } from '@clerk/types';

const commonTexts = {
  signIn: {
    phoneCode: {
      title: '检查手机短信',
      subtitle: '继续使用 {{applicationName}}',
      formTitle: '验证码',
      formSubtitle: '使用发送到您手机的验证码',
      resendButton: '重新发送验证码',
    },
  },
} as const;

export const zhCN: LocalizationResource = {
  locale: 'zh-CN',
  socialButtonsBlockButton: '使用 {{provider|titleize}} 登录',
  dividerText: '或者',
  formFieldLabel__emailAddress: '电子邮件地址',
  formFieldLabel__emailAddresses: '电子邮件地址',
  formFieldLabel__phoneNumber: '电话号码',
  formFieldLabel__username: '用户名',
  formFieldLabel__emailAddress_phoneNumber: '电子邮件地址或电话号码',
  formFieldLabel__emailAddress_username: '电子邮件地址或用户名',
  formFieldLabel__phoneNumber_username: '电话号码或用户名',
  formFieldLabel__emailAddress_phoneNumber_username: '电子邮件地址、电话号码或用户名',
  formFieldLabel__password: '密码',
  formFieldLabel__currentPassword: '当前密码',
  formFieldLabel__newPassword: '新密码',
  formFieldLabel__confirmPassword: '确认密码',
  formFieldLabel__signOutOfOtherSessions: '登出所有其他设备',
  formFieldLabel__firstName: '名字',
  formFieldLabel__lastName: '姓氏',
  formFieldLabel__backupCode: '备用代码',
  formFieldLabel__organizationName: '组织名称',
  formFieldLabel__organizationSlug: 'URL 简称',
  formFieldLabel__role: '角色',
  formFieldInputPlaceholder__emailAddress: '',
  formFieldInputPlaceholder__emailAddresses:
    '输入或粘贴一个或多个电子邮件地址，用空格或逗号分隔',
  formFieldInputPlaceholder__phoneNumber: '',
  formFieldInputPlaceholder__username: '',
  formFieldInputPlaceholder__emailAddress_phoneNumber: '',
  formFieldInputPlaceholder__emailAddress_username: '',
  formFieldInputPlaceholder__phoneNumber_username: '',
  formFieldInputPlaceholder__emailAddress_phoneNumber_username: '',
  formFieldInputPlaceholder__password: '',
  formFieldInputPlaceholder__firstName: '',
  formFieldInputPlaceholder__lastName: '',
  formFieldInputPlaceholder__backupCode: '',
  formFieldInputPlaceholder__organizationName: '',
  formFieldInputPlaceholder__organizationSlug: '',
  formFieldError__notMatchingPasswords: `密码不匹配。`,
  formFieldError__matchingPasswords: '密码匹配。',
  formFieldAction__forgotPassword: '忘记密码？',
  formFieldHintText__optional: '选填',
  formButtonPrimary: '继续',
  signInEnterPasswordTitle: '输入您的密码',
  backButton: '返回',
  footerActionLink__useAnotherMethod: '使用另一种方法',
  badge__primary: '主要',
  badge__thisDevice: '此设备',
  badge__userDevice: '用户设备',
  badge__otherImpersonatorDevice: '其他模拟器设备',
  badge__default: '默认',
  badge__unverified: '未验证',
  badge__requiresAction: '需要操作',
  badge__you: '您',
  footerPageLink__help: '帮助',
  footerPageLink__privacy: '隐私',
  footerPageLink__terms: '条款',
  paginationButton__previous: '上一页',
  paginationButton__next: '下一页',
  paginationRowText__displaying: '显示',
  paginationRowText__of: '的',
  membershipRole__admin: '管理员',
  membershipRole__basicMember: '成员',
  membershipRole__guestMember: '访客',
  signUp: {
    start: {
      title: '创建您的账户',
      subtitle: '继续使用 {{applicationName}}',
      actionText: '已经有账户了？',
      actionLink: '登录',
    },
    emailLink: {
      title: '验证您的电子邮件',
      subtitle: '继续使用 {{applicationName}}',
      formTitle: '验证链接',
      formSubtitle: '使用发送到您的电子邮件地址的验证链接',
      resendButton: '重新发送链接',
      verified: {
        title: '成功注册',
      },
      loading: {
        title: '正在注册...',
      },
      verifiedSwitchTab: {
        title: '成功验证电子邮件',
        subtitle: '返回新打开的标签页继续',
        subtitleNewTab: '返回上一个标签页继续',
      },
    },
    emailCode: {
      title: '验证您的电子邮件',
      subtitle: '继续使用 {{applicationName}}',
      formTitle: '验证码',
      formSubtitle: '输入发送到您的电子邮件地址的验证码',
      resendButton: '重新发送验证码',
    },
    phoneCode: {
      title: '验证您的电话',
      subtitle: '继续使用 {{applicationName}}',
      formTitle: '验证码',
      formSubtitle: '输入发送到您的电话号码的验证码',
      resendButton: '重新发送验证码',
    },
    continue: {
      title: '填写缺少的字段',
      subtitle: '继续使用 {{applicationName}}',
      actionText: '已经有账户了？',
      actionLink: '登录',
    },
  },
  signIn: {
    start: {
      title: '登录',
      subtitle: '继续使用 {{applicationName}}',
      actionText: '还没有账户？',
      actionLink: '注册',
      actionLink__use_email: '使用电子邮件',
      actionLink__use_phone: '使用电话',
      actionLink__use_username: '使用用户名',
      actionLink__use_email_username: '使用电子邮件或用户名',
    },
    password: {
      title: '输入您的密码',
      subtitle: '继续使用 {{applicationName}}',
      actionLink: '使用其他方法',
    },
    forgotPasswordAlternativeMethods: {
      title: '忘记密码？',
      label__alternativeMethods: '或者，使用其他方式登录。',
      blockButton__resetPassword: '重置密码',
    },
    forgotPassword: {
      title_email: '查看您的电子邮件',
      title_phone: '查看您的手机',
      subtitle: '重置您的密码',
      formTitle: '重置密码代码',
      formSubtitle_email: '输入发送到您的电子邮件地址的代码',
      formSubtitle_phone: '输入发送到您的电话号码的代码',
      resendButton: '重新发送代码',
    },
    resetPassword: {
      title: '重置密码',
      formButtonPrimary: '重置密码',
      successMessage: '您的密码已成功更改。正在为您登录，请稍等。',
    },
    resetPasswordMfa: {
      detailsLabel: '我们需要验证您的身份才能重置您的密码。',
    },
    emailCode: {
      title: '查看您的电子邮件',
      subtitle: '继续使用 {{applicationName}}',
      formTitle: '验证码',
      formSubtitle: '输入发送到您的电子邮件地址的验证码',
      resendButton: '重新发送验证码',
    },
    emailLink: {
      title: '查看您的电子邮件',
      subtitle: '继续使用 {{applicationName}}',
      formTitle: '验证链接',
      formSubtitle: '使用发送到您的电子邮件的验证链接',
      resendButton: '重新发送链接',
      unusedTab: {
        title: '您可以关闭此标签页',
      },
      verified: {
        title: '成功登录',
        subtitle: '即将为您重定向',
      },
      verifiedSwitchTab: {
        subtitle: '返回原始标签页继续',
        titleNewTab: '在其他标签页上登录',
        subtitleNewTab: '返回新打开的标签页继续',
      },
      loading: {
        title: '正在登录...',
        subtitle: '即将为您重定向',
      },
      failed: {
        title: '此验证链接无效',
        subtitle: '返回原始标签页继续。',
      },
      expired: {
        title: '此验证链接已过期',
        subtitle: '返回原始标签页继续。',
      },
    },
    phoneCode: { ...commonTexts.signIn.phoneCode },
    phoneCodeMfa: { ...commonTexts.signIn.phoneCode, subtitle: '' },
    totpMfa: {
      title: '两步验证',
      subtitle: '',
      formTitle: '验证码',
      formSubtitle: '输入您的验证应用程序生成的验证码',
    },
    backupCodeMfa: {
      title: '输入备用代码',
      subtitle: '继续使用 {{applicationName}}',
      formTitle: '',
      formSubtitle: '',
    },
    alternativeMethods: {
      title: '使用其他方法',
      actionLink: '获取帮助',
      blockButton__emailLink: '电子邮件链接到 {{identifier}}',
      blockButton__emailCode: '电子邮件验证码到 {{identifier}}',
      blockButton__phoneCode: '发送短信代码到 {{identifier}}',
      blockButton__password: '使用您的密码登录',
      blockButton__totp: '使用您的验证应用程序',
      blockButton__backupCode: '使用备用代码',
      getHelp: {
        title: '获取帮助',
        content: `如果您在登录账户时遇到困难，请给我们发送电子邮件，我们将尽快让您恢复访问。`,
        blockButton__emailSupport: '邮件支持',
      },
    },
    noAvailableMethods: {
      title: '无法登录',
      subtitle: '出现错误',
      message: "无法继续登录。没有可用的身份验证因素。",
    },
  },
  userProfile: {
    mobileButton__menu: '菜单',
    formButtonPrimary__continue: '继续',
    formButtonPrimary__finish: '完成',
    formButtonReset: '取消',
    start: {
      headerTitle__account: '账户',
      headerTitle__security: '安全',
      headerSubtitle__account: '管理您的账户信息',
      headerSubtitle__security: '管理您的安全设置',
      profileSection: {
        title: '个人资料',
      },
      usernameSection: {
        title: '用户名',
        primaryButton__changeUsername: '更改用户名',
        primaryButton__setUsername: '设置用户名',
      },
      emailAddressesSection: {
        title: '电子邮件地址',
        primaryButton: '添加电子邮件地址',
        detailsTitle__primary: '主要电子邮件地址',
        detailsSubtitle__primary: '此电子邮件地址是主要电子邮件地址',
        detailsAction__primary: '完成验证',
        detailsTitle__nonPrimary: '设为主要电子邮件地址',
        detailsSubtitle__nonPrimary:
          '将此电子邮件地址设为主要的，以接收关于您账户的通信。',
        detailsAction__nonPrimary: '设为主要',
        detailsTitle__unverified: '未验证的电子邮件地址',
        detailsSubtitle__unverified: '此电子邮件地址尚未验证，功能可能受到限制',
        detailsAction__unverified: '完成验证',
        destructiveActionTitle: '移除',
        destructiveActionSubtitle: '删除此电子邮件地址，并将其从您的账户中移除',
        destructiveAction: '移除电子邮件地址',
      },
      phoneNumbersSection: {
        title: '电话号码',
        primaryButton: '添加电话号码',
        detailsTitle__primary: '主要电话号码',
        detailsSubtitle__primary: '此电话号码是主要电话号码',
        detailsAction__primary: '完成验证',
        detailsTitle__nonPrimary: '设为主要电话号码',
        detailsSubtitle__nonPrimary:
          '将此电话号码设为主要的，以接收关于您账户的通信。',
        detailsAction__nonPrimary: '设为主要',
        detailsTitle__unverified: '未验证的电话号码',
        detailsSubtitle__unverified: '此电话号码尚未验证，功能可能受到限制',
        detailsAction__unverified: '完成验证',
        destructiveActionTitle: '移除',
        destructiveActionSubtitle: '删除此电话号码，并将其从您的账户中移除',
        destructiveAction: '移除电话号码',
      },
      connectedAccountsSection: {
        title: '已连接的账户',
        primaryButton: '连接账户',
        title__conectionFailed: '重试失败的连接',
        title__connectionFailed: '重试失败的连接',
        title__reauthorize: '需要重新授权',
        subtitle__reauthorize:
          '所需的权限已更新，您可能会遇到功能限制。请重新授权此应用程序，以避免任何问题',
        actionLabel__conectionFailed: '再试一次',
        actionLabel__connectionFailed: '再试一次',
        actionLabel__reauthorize: '立即授权',
        destructiveActionTitle: '移除',
        destructiveActionSubtitle: '从您的账户中移除此已连接的账户',
        destructiveActionAccordionSubtitle: '移除已连接的账户',
      },
      enterpriseAccountsSection: {
        title: '企业账户',
      },
      passwordSection: {
        title: '密码',
        primaryButton__changePassword: '更改密码',
        primaryButton__setPassword: '设置密码',
      },
      mfaSection: {
        title: '两步验证',
        primaryButton: '添加两步验证',
        phoneCode: {
          destructiveActionTitle: '移除',
          destructiveActionSubtitle: '从两步验证方法中移除此电话号码',
          destructiveActionLabel: '移除电话号码',
          title__default: '默认因素',
          title__setDefault: '设为默认因素',
          subtitle__default: '登录时，此因素将被用作默认的两步验证方法。',
          subtitle__setDefault:
            '将此因素设为默认因素，登录时将使用它作为默认的两步验证方法。',
          actionLabel__setDefault: '设为默认',
        },
        backupCodes: {
          headerTitle: '备份代码',
          title__regenerate: '重新生成备份代码',
          subtitle__regenerate:
            '获取一套新的安全备份代码。之前的备份代码将被删除，无法使用。',
          actionLabel__regenerate: '重新生成代码',
        },
        totp: {
          headerTitle: '验证器应用程序',
          title: '默认因素',
          subtitle: '登录时，此因素将被用作默认的两步验证方法。',
          destructiveActionTitle: '移除',
          destructiveActionSubtitle: '从两步验证方法中移除验证器应用程序',
          destructiveActionLabel: '移除验证器应用程序',
        },
      },

      activeDevicesSection: {
        title: '活动设备',
        primaryButton: '活动设备',
        detailsTitle: '当前设备',
        detailsSubtitle: '这是你目前正在使用的设备',
        destructiveActionTitle: '登出',
        destructiveActionSubtitle: '从此设备上退出您的账户',
        destructiveAction: '退出设备',
      },
      web3WalletsSection: {
        title: 'Web3 钱包',
        primaryButton: 'Web3 钱包',
        destructiveActionTitle: '移除',
        destructiveActionSubtitle: '从您的账户中移除这个 Web3 钱包',
        destructiveAction: '移除钱包',
      },
    },
    profilePage: {
      title: '更新个人资料',
      imageFormTitle: '个人资料图片',
      imageFormSubtitle: '上传图片',
      imageFormDestructiveActionSubtitle: '移除图片',
      fileDropAreaTitle: '拖拽文件到这里，或者...',
      fileDropAreaAction: '选择文件',
      fileDropAreaHint: '上传小于10MB的JPG, PNG, GIF, 或WEBP格式的图片',
      successMessage: '您的个人资料已更新。',
    },
    usernamePage: {
      title: '更新用户名',
      successMessage: '您的用户名已更新。',
    },
    emailAddressPage: {
      title: '添加电子邮件地址',
      emailCode: {
        formHint: '一封含有验证码的邮件将会被发送到这个电子邮件地址。',
        formTitle: '验证码',
        formSubtitle: '输入发送到 {{identifier}} 的验证码',
        resendButton: '重发验证码',
        successMessage: '电子邮件 {{identifier}} 已被添加到您的账户。',
      },
      emailLink: {
        formHint: '一封含有验证链接的邮件将会被发送到这个电子邮件地址。',
        formTitle: '验证链接',
        formSubtitle: '点击发送到 {{identifier}} 的邮件中的验证链接',
        resendButton: '重发链接',
        successMessage: '电子邮件 {{identifier}} 已被添加到您的账户。',
      },
      removeResource: {
        title: '移除电子邮件地址',
        messageLine1: '{{identifier}} 将从此账户中被移除。',
        messageLine2: '您将无法使用这个电子邮件地址登录。',
        successMessage: '电子邮件 {{emailAddress}} 已从您的账户中移除。',
      },
    },
    phoneNumberPage: {
      title: '添加电话号码',
      successMessage: '{{identifier}} 已被添加到您的账户。',
      infoText: '一条包含验证链接的短信将会发送到这个电话号码。',
      infoText__secondary: '可能会产生信息和数据费用。',
      removeResource: {
        title: '移除电话号码',
        messageLine1: '{{identifier}} 将从此账户中被移除。',
        messageLine2: '您将无法使用这个电话号码登录。',
        successMessage: '电话号码 {{phoneNumber}} 已从您的账户中移除。',
      },
    },
    connectedAccountPage: {
      title: '添加已连接的账户',
      formHint: '选择一个供应商来连接您的账户。',
      formHint__noAccounts: '没有可用的外部账户供应商。',
      socialButtonsBlockButton: '连接 {{provider|titleize}} 账户',
      successMessage: '供应商已被添加到您的账户',
      removeResource: {
        title: '移除已连接的账户',
        messageLine1: '{{identifier}} 将从此账户中被移除。',
        messageLine2:
          '您将无法再使用这个已连接的账户，任何依赖的功能将不再工作。',
        successMessage: '{{connectedAccount}} 已从您的账户中移除。',
      },
    },
    web3WalletPage: {
      title: '添加web3钱包',
      subtitle__availableWallets: '选择一个 web3 钱包连接到您的账户。',
      subtitle__unavailableWallets: '没有可用的 web3 钱包。',
      successMessage: '钱包已被添加到您的账户。',
      removeResource: {
        title: '移除 web3 钱包',
        messageLine1: '{{identifier}} 将从此账户中被移除。',
        messageLine2: '您将无法使用这个 web3 钱包登录。',
        successMessage: '{{web3Wallet}} 已从您的账户中移除。',
      },
    },
    passwordPage: {
      title: '设置密码',
      changePasswordTitle: '更改密码',
      successMessage: '您的密码已设置。',
      changePasswordSuccessMessage: '您的密码已更新。',
      sessionsSignedOutSuccessMessage: '所有其他设备已退出。',
    },
    mfaPage: {
      title: '添加两步验证',
      formHint: '选择一个添加的方法。',
    },
    mfaTOTPPage: {
      title: '添加验证器应用程序',
      verifyTitle: '验证代码',
      verifySubtitle: '输入您的验证器生成的验证码',
      successMessage:
        '现在已启用两步验证。在登录时，您需要输入来自此验证器的验证码作为额外步骤。',
      authenticatorApp: {
        infoText__ableToScan:
          '在您的验证器应用中设置一个新的登录方法，并扫描下面的二维码将其链接到您的账户。',
        infoText__unableToScan: '在验证器中设置一个新的登录方法，并输入下面提供的 Key。',
        inputLabel__unableToScan1:
          '确保启用了基于时间或一次性密码，然后完成链接您的账户。',
        inputLabel__unableToScan2:
          '或者，如果您的验证器支持 TOTP URIs，您也可以复制完整的 URI。',
        buttonAbleToScan__nonPrimary: '扫描二维码',
        buttonUnableToScan__nonPrimary: '不能扫描二维码？',
      },
      removeResource: {
        title: '移除两步验证',
        messageLine1: '登录时，将不再需要来自此验证器的验证码。',
        messageLine2: '您的账户可能不再安全。您确定要继续吗？',
        successMessage: '已移除通过验证器应用程序的两步验证。',
      },
    },
    mfaPhoneCodePage: {
      title: '添加短信验证码验证',
      primaryButton__addPhoneNumber: '添加电话号码',
      subtitle__availablePhoneNumbers: '选择一个电话号码来注册短信验证码两步验证。',
      subtitle__unavailablePhoneNumbers:
        '没有可用的电话号码来注册短信验证码两步验证。',
      successMessage:
        '现在已启用此电话号码的短信验证码两步验证。在登录时，您需要输入发送到这个电话号码的验证码作为额外步骤。',
      removeResource: {
        title: '移除两步验证',
        messageLine1: '{{identifier}} 将不再在登录时接收验证代码。',
        messageLine2: '您的账户可能不再安全。您确定要继续吗？',
        successMessage: '已移除{{mfaPhoneCode}}的短信验证码两步验证',
      },
    },
    backupCodePage: {
      title: '添加备份代码验证',
      title__codelist: '备份代码',
      subtitle__codelist: '安全存储并保守秘密。',
      infoText1: '将为此账户启用备份代码。',
      infoText2:
        '保密并安全存储备份代码。如果您怀疑它们已经泄露，您可以重新生成备份代码。',
      successSubtitle:
        '如果您失去了验证设备的访问权限，您可以使用其中之一登录您的账户。',
      successMessage:
        '现在已启用备份代码。如果您失去了验证设备的访问权限，您可以使用其中之一登录您的账户。每个代码只能使用一次。',
      actionLabel__copy: '复制全部',
      actionLabel__copied: '已复制！',
      actionLabel__download: '下载 .txt',
      actionLabel__print: '打印',
    },
  },
  userButton: {
    action__manageAccount: '管理账户',
    action__signOut: '退出登录',
    action__signOutAll: '退出所有账户',
    action__addAccount: '添加账户',
  },
  organizationSwitcher: {
    personalWorkspace: '个人工作区',
    notSelected: '未选择组织',
    action__createOrganization: '创建组织',
    action__manageOrganization: '管理组织',
  },
  impersonationFab: {
    title: '以 {{identifier}} 登录',
    action__signOut: '退出登录',
  },
  organizationProfile: {
    start: {
      headerTitle__members: '成员',
      headerTitle__settings: '设置',
      headerSubtitle__members: '查看并管理组织成员',
      headerSubtitle__settings: '管理组织设置',
    },
    profilePage: {
      title: '组织简介',
      subtitle: '管理组织简介',
      successMessage: '组织已更新。',
      dangerSection: {
        title: '危险',
        leaveOrganization: {
          title: '离开组织',
          messageLine1: '您确定要离开此组织吗？您将失去对此组织及其应用程序的访问权限。',
          messageLine2: '此操作是永久性的且无法撤销。',
          successMessage: '您已离开了组织。',
        },
      },
    },
    invitePage: {
      title: '邀请成员',
      subtitle: '邀请新成员加入此组织',
      successMessage: '邀请成功发送',
      detailsTitle__inviteFailed: '邀请无法发送。修复以下问题然后重试：',
      formButtonPrimary__continue: '发送邀请',
    },
    membersPage: {
      detailsTitle__emptyRow: '没有可显示的成员',
      action__invite: '邀请',
      start: {
        headerTitle__active: '活跃',
        headerTitle__invited: '已邀请',
      },
      activeMembersTab: {
        tableHeader__user: '用户',
        tableHeader__joined: '加入',
        tableHeader__role: '角色',
        tableHeader__actions: '',
        menuAction__remove: '移除成员',
      },
      invitedMembersTab: {
        tableHeader__invited: '已邀请',
        menuAction__revoke: '撤销邀请',
      },
    },
  },
  createOrganization: {
    title: '创建组织',
    formButtonSubmit: '创建组织',
    subtitle: '设置组织简介',
    invitePage: {
      formButtonReset: '跳过',
    },
  },
  unstable__errors: {
    form_identifier_not_found: '',
    captcha_invalid: '由于安全验证失败，注册未成功。请刷新页面重试或联系支持获取更多帮助。',
    form_password_pwned: '这个密码在数据泄露中被发现，不能使用，请换一个密码试试。',
    form_username_invalid_length: '',
    form_param_format_invalid: '',
    form_password_length_too_short: '',
    form_param_nil: '',
    form_code_incorrect: '',
    form_password_incorrect: '',
    not_allowed_access: '',
    form_identifier_exists: '',
    form_password_validation_failed: '密码错误',
    form_password_not_strong_enough: '您的密码强度不够。',
    form_password_size_in_bytes_exceeded: '您的密码超过了允许的最大字节数，请缩短它或去掉一些特殊字符。',
    passwordComplexity: {
      sentencePrefix: '您的密码必须包含',
      minimumLength: '{{length}}个或更多字符',
      maximumLength: '少于{{length}}个字符',
      requireNumbers: '一个数字',
      requireLowercase: '一个小写字母',
      requireUppercase: '一个大写字母',
      requireSpecialCharacter: '一个特殊字符',
    },
    zxcvbn: {
      notEnough: '您的密码强度不够。',
      couldBeStronger: '您的密码可以用，但可以更强。试着添加更多字符。',
      goodPassword: '做得好。这是一个优秀的密码。',
      warnings: {
        straightRow: '键盘上的直行键易被猜到。',
        keyPattern: '短键盘模式易被猜到。',
        simpleRepeat: '像"aaa"这样的重复字符易被猜到。',
        extendedRepeat: '像"abcabcabc"这样的重复字符模式易被猜到。',
        sequences: '像"abc"这样的常见字符序列易被猜到。',
        recentYears: '近年来易被猜到。',
        dates: '日期易被猜到。',
        topTen: '这是一个大量使用的密码。',
        topHundred: '这是一个频繁使用的密码。',
        common: '这是一个常用的密码。',
        similarToCommon: '这个密码和常用密码相似。',
        wordByItself: '单个单词易被猜到。',
        namesByThemselves: '单个名字或姓氏易被猜到。',
        commonNames: '常见的名字和姓氏易被猜到。',
        userInputs: '不应该有任何个人或页面相关的数据。',
        pwned: '您的密码在互联网上的数据泄露中被暴露。',
      },
      suggestions: {
        l33t: '避免预测的字母替换，如"@"代替"a"。',
        reverseWords: '避免常用词的反向拼写。',
        allUppercase: '大写一些，但不是所有的字母。',
        capitalization: '大写不仅仅是第一个字母。',
        dates: '避免与你有关的日期和年份。',
        recentYears: '避免近年来。',
        associatedYears: '避免与你有关的年份。',
        sequences: '避免常见字符序列。',
        repeated: '避免重复的单词和字符。',
        longerKeyboardPattern: '使用更长的键盘模式，并多次改变打字方向。',
        anotherWord: '添加更不常见的更多单词。',
        useWords: '使用多个单词，但避免常见短语。',
        noNeed: '你可以创建强密码，而无需使用符号，数字或大写字母。',
        pwned: '如果您在其他地方使用此密码，您应该更改它。',
      },
    },
  },
  dates: {
    previous6Days: "上周{{ date | weekday('zh-CN','long') }} {{ date | timeString('zh-CN') }}",
    lastDay: "昨天{{ date | timeString('zh-CN') }}",
    sameDay: "今天{{ date | timeString('zh-CN') }}",
    nextDay: "明天{{ date | timeString('zh-CN') }}",
    next6Days: "{{ date | weekday('zh-CN','long') }} {{ date | timeString('zh-CN') }}",
    numeric: "{{ date | numeric('zh-CN') }}",
  },
} as const;